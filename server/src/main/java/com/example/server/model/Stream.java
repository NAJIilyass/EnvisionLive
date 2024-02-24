package com.example.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class Stream {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String name;
    private String streamKey;
    private String thumbnailUrl;
    private String userId;
    private Boolean isLive;
    private Boolean isChatEnabled;
    private Boolean isChatFollowersOnly;
    private LocalDateTime createdAt;
    private LocalDateTime endAt;
}
