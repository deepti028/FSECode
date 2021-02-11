package com.stackroute.userservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.service.SecurityTokenGenerator;
import com.stackroute.userservice.service.UserService;
import com.stackroute.userservice.exception.UserNotFoundException;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private UserService userService;
    @MockBean
    private SecurityTokenGenerator securityTokenGenerator;

    private User user;
    @InjectMocks
    private UserController userController;
    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
        user = new User();
        user.setUserName("deepti028");
        user.setPassword("deepti028");
        user.setEmail("deepti028@gmail.com");
    }
    @Test
    public void testSaveUser() throws Exception {
        when(userService.saveUser(any())).thenReturn(user);
        mockMvc.perform(post("/api/v1/authenticationservice/save").contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(user))).andExpect(status().isCreated()).andDo(print());
        verify(userService,times(1)).saveUser(any());
    }

    @Test
    public void testLoginFailure() throws Exception {
        when(userService.saveUser(any())).thenReturn(user);
        when(userService.findByUserNameAndAndPassword(user.getUserName(),user.getPassword())).thenThrow(new UserNotFoundException());
        mockMvc.perform(post("/api/v1/authenticationservice/login").contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(user))).andExpect(status().isNotFound()).andDo(print());
        verify(userService,times(1)).findByUserNameAndAndPassword(user.getUserName(),user.getPassword());
    }

    @Test
    public void testLoginSuccess() throws Exception {
        when(userService.saveUser(any())).thenReturn(user);
        when(userService.findByUserNameAndAndPassword(user.getUserName(),user.getPassword())).thenReturn(user);
        mockMvc.perform(post("/api/v1/authenticationservice/login").contentType(MediaType.APPLICATION_JSON)
                .content(jsonToString(user))).andExpect(status().isOk()).andDo(print());
        verify(userService,times(1)).findByUserNameAndAndPassword(user.getUserName(),user.getPassword());
    }

    private static String jsonToString(Object obj) {
        String result;

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            result = objectMapper.writeValueAsString(obj);
        } catch (JsonProcessingException e) {
            result = "JSON processing error";
        }
        return result;
    }
}
