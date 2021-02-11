//package com.stackroute.favouriteservice.repository;
//
//public class UserRepositoryTest {
//}
package com.stackroute.favouriteservice.repository;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.stackroute.favouriteservice.domain.Match;
//import com.stackroute.favouriteservice.domain.MatchAttributes;
import com.stackroute.favouriteservice.domain.User;

@RunWith(SpringRunner.class)
@DataMongoTest
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;
    private Match match;
//    private MatchAttributes attributes;
    private User user;

    @Before
    public void setUp() {
//        MatchAttributes matchAttributes = new MatchAttributes("2020-01-11T10:24:34Z", 1791, "esports-squad",
//                "Baltic_Main", "bluehole-pubg", "progress");
        match = new Match(1213063, "2020-04-05T00:00:00.000Z", "2020-04-05T05:00:00.000Z", "Pakistan" , "Bangladesh", "Test", true);
        List<Match> matches = new ArrayList();
        matches.add(match);
        user = new User("deepti028", "deepti028@gmail.com", matches);
    }

    @After
    public void tearDown() {

        userRepository.deleteAll();
    }

    @Test
    public void testSaveMatch() {
        userRepository.save(user);
        User fetchUser = userRepository.findByUserName(user.getUserName());
        Match fetchedMatch = fetchUser.getFavouriteMatches().get(0);
        Assert.assertEquals(fetchedMatch.getUniqueId(), user.getFavouriteMatches().get(0).getUniqueId());
    }

}

