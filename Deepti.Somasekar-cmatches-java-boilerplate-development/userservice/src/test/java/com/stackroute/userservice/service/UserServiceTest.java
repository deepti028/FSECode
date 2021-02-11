package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.repository.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;


import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

public class UserServiceTest {
    @Mock
    private UserRepository  userRepository;
    private User user;

    @InjectMocks
    private UserServiceImpl userService;


    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);
        user = new User();
        user.setUserName("John");
        user.setPassword("John123");

    }

    @Test
    public void testSaveUserSuccess() throws UserAlreadyExistsException {
        Mockito.when(userRepository.save(user)).thenReturn(user);
        User fetchUser = userService.saveUser(user);
        Assert.assertEquals(user,fetchUser);
        verify(userRepository,times(1)).save(user);
    }

    @Test(expected = UserNotFoundException.class)
    public void testFindInvalidUser() throws UserNotFoundException {
        Mockito.when(userRepository.findByUserNameAndPassword(user.getUserName(),user.getPassword())).thenReturn(null);
        userService.findByUserNameAndAndPassword(user.getUserName(),user.getPassword());
        verify(userRepository,times(1)).findByUserNameAndPassword(user.getUserName(),user.getPassword());
    }

    @Test(expected=UserAlreadyExistsException.class)
    public void testSaveUserFailure() throws UserAlreadyExistsException {
        Mockito.when(userRepository.findByUserName(user.getUserName())).thenReturn(user);
        userService.saveUser(user);
        verify(userRepository,times(1)).findByUserName(user.getUserName());
    }

    @Test
    public void testFindByUserNameAndPassword(){
        Mockito.when(userRepository.findByUserNameAndPassword(user.getUserName(),user.getPassword())).thenReturn(user);
        User fetchedUser = userRepository.findByUserNameAndPassword(user.getUserName(),user.getPassword());
        Assert.assertEquals(user.getUserName(),fetchedUser.getUserName());
        verify(userRepository,times(1)).findByUserNameAndPassword(user.getUserName(),user.getPassword());
    }
}
