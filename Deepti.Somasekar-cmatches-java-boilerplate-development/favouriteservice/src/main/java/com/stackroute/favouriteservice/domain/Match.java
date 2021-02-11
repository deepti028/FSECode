package com.stackroute.favouriteservice.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Match {
//    private Integer id;

//private String id;
    @JsonProperty
    private String comments;
    @Id
    private Integer uniqueId;
    private String date;
    private String dateTimeGMT;
    @JsonProperty("team-1")
    private String team1;
    @JsonProperty("team-2")
    private String team2;
    private String type;
    private boolean matchStarted;

    public Match() {}



    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public Match(Integer uniqueId, String date, String dateTimeGMT, String team1, String team2,
                 String type, boolean matchStarted) {
        super();
        this.uniqueId = uniqueId;
        this.date = date;
        this.dateTimeGMT = dateTimeGMT;
        this.team1 = team1;
        this.team2 = team2;
        this.type = type;
        this.matchStarted = matchStarted;
    }

    public Integer getUniqueId() {
        return uniqueId;
    }

    public void setUniqueId(Integer unique_id) {
        this.uniqueId = unique_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDateTimeGMT() {
        return dateTimeGMT;
    }

    public void setDateTimeGMT(String dateTimeGMT) {
        this.dateTimeGMT = dateTimeGMT;
    }

    public String getTeam1() {
        return team1;
    }

    public void setTeam1(String team1) {
        this.team1 = team1;
    }

    public String getTeam2() {
        return team2;
    }

    public void setTeam2(String team2) {
        this.team2 = team2;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public boolean getMatchStarted() {
        return matchStarted;
    }

    public void setMatchStarted(boolean matchStarted) {
        this.matchStarted = matchStarted;
    }
}

