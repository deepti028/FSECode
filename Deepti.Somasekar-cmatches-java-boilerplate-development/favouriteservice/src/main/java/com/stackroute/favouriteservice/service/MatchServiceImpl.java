package com.stackroute.favouriteservice.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.favouriteservice.domain.Match;
import com.stackroute.favouriteservice.domain.User;
import com.stackroute.favouriteservice.exception.MatchAlreadyExistsException;
import com.stackroute.favouriteservice.exception.MatchNotFoundException;
import com.stackroute.favouriteservice.exception.UserAlreadyExistsException;
import com.stackroute.favouriteservice.repository.UserRepository;
@Service
public class MatchServiceImpl implements MatchService{
    private UserRepository userRepository;
    @Autowired
    public MatchServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Override
    public User saveFavoriteMatchToList(Match match, String userName) throws MatchAlreadyExistsException {
        User fetchedUser = Optional.ofNullable(userRepository.findByUserName(userName)).orElseGet(()->{
            User user = new User();
            user.setUserName(userName);
            return user;
        });

        List<Match> fetchedMatches = fetchedUser.getFavouriteMatches();
        System.out.println("fetchedMatches"+fetchedMatches);
      //  System.out.println("fetchedMatches size"+fetchedMatches.size());

        if(fetchedMatches!=null){
            for(Match existingMatch:fetchedMatches){
                System.out.println("existingMatch.getUniqueId(): " + existingMatch.getUniqueId());
                System.out.println("match.getUniqueId(): " + match.getUniqueId());
                if(existingMatch.getUniqueId().equals(match.getUniqueId())){
                    throw new MatchAlreadyExistsException();
                }
            }
            fetchedMatches.add(match);
            userRepository.save(fetchedUser);
        }else{
            fetchedMatches = new ArrayList<>();
            fetchedMatches.add(match);
            fetchedUser.setFavouriteMatches(fetchedMatches);
            userRepository.save(fetchedUser);
        }
        return fetchedUser;
    }

    @Override
    public User deleteMatchFromFavouriteList(String userName, Integer matchId) throws MatchNotFoundException {
        User fetchUser = userRepository.findByUserName(userName);
        List<Match> fetchMathes = fetchUser.getFavouriteMatches();
        if(fetchMathes!=null && fetchMathes.size()>0){
            for(int i=0;i<fetchMathes.size();i++){
                if(matchId.equals(fetchMathes.get(i).getUniqueId())){
                    fetchMathes.remove(i);
                    fetchUser.setFavouriteMatches(fetchMathes);
                    userRepository.save(fetchUser);
                    break;
                }
            }

        }else{
            throw new MatchNotFoundException();
        }
        return fetchUser;
    }

    @Override
    public User updateCommentForMatch(String comments, Integer matchId, String userName) throws MatchNotFoundException {
        User fetchUser = userRepository.findByUserName(userName);
        List<Match> fetchMatches = fetchUser.getFavouriteMatches();

        if(fetchMatches.size()>0){
            for(int i=0;i<fetchMatches.size();i++){
                if(matchId.equals(fetchMatches.get(i).getUniqueId())){
                    fetchMatches.get(i).setComments(comments);
                    userRepository.save(fetchUser);
                    break;
                }
            }

        }else{
            throw new MatchNotFoundException();
        };
        return fetchUser;
    }

    @Override
    public List<Match> getAllFavouriteMatches(String userName) throws Exception {
        return userRepository.findByUserName(userName).getFavouriteMatches();
    }


}
