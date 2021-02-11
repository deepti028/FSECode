package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;

public interface UserService {

    public User saveUser(User user) throws UserAlreadyExistsException;

    public User findByUserNameAndAndPassword(String userName, String password) throws UserNotFoundException;
}