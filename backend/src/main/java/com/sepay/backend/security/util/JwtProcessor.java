package com.sepay.backend.security.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JwtProcessor {
<<<<<<< HEAD
    static private final long TOKEN_VALID_MILISECOND = 1000L * 60 * 60 * 2; // 토큰 유효 시간 2시간
=======
    static private final long TOKEN_VALID_MILISECOND = 1000L * 60 * 60 * 2; // 5 분
>>>>>>> 59aa309e4cbc61504bfe42cdb43cc5b4b7d664ff

//    private String secretKey = "Enough long random secret key string assignment "; // 충분히 긴 임의의(랜덤한) 비밀키 문자열 배정
//    private Key key = Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));
       private Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256); // HS256 알고리즘을 사용하는 키 생성

    // JWT 생성
    public String generateToken(String subject) {
        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + TOKEN_VALID_MILISECOND))
                .signWith(key)
                .compact();
    }

<<<<<<< HEAD
    // JWT Subject(userId) 추출 - 해석 불가인 경우 예외 발생
=======
    // JWT Subject(username) 추출 - 해석 불가인 경우 예외 발생
>>>>>>> 59aa309e4cbc61504bfe42cdb43cc5b4b7d664ff
    // 예외 ExpiredJwtException, UnsupportedJwtException, MalformedJwtException, SignatureException,
    //      IllegalArgumentException
    public String getUsername(String token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
        } catch (ExpiredJwtException e) {
            System.out.println("Token is expired");
            throw new IllegalArgumentException("Token is expired", e);
        } catch (JwtException e) {
            System.out.println("Token is invalid");
            throw new IllegalArgumentException("Token is invalid", e);
        } catch (IllegalArgumentException e) {
            System.out.println("Token is empty");
            throw new IllegalArgumentException("Token is empty", e);
        }
    }

    // JWT 검증(유효 기간 검증) - 해석 불가인 경우 예외 발생
    public boolean validateToken(String jwtToken) {
        try {
            Jws<Claims> claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date()); // 토큰 만료 여부 확인
        } catch (ExpiredJwtException e) {
            System.out.println("Token is expired");
            return false;
        } catch (JwtException e) {
            System.out.println("Token is invalid");
            return false;
        }
    }
}
