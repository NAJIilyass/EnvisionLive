package com.envisionlive.backend.controller;

import com.envisionlive.backend.model.ChangePasswordRequest;
import com.envisionlive.backend.model.User;
import com.envisionlive.backend.service.UserService;
import com.envisionlive.backend.util.JwtTokenUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private JwtTokenUtil jwtTokenUtil;

    private final UserService service;

    @PatchMapping
    public ResponseEntity<?> changePassword(
            @RequestBody ChangePasswordRequest request,
            Principal connectedUser
    ) {
        service.changePassword(request, connectedUser);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUserData(HttpServletRequest request) {
        String token = jwtTokenUtil.extractTokenFromRequest(request);
        String email = jwtTokenUtil.extractEmail(token);
        Optional<User> user = service.getUserDataByEmail(email);
        return ResponseEntity.ok(user);
    }
}
