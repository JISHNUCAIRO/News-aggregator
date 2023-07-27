package com.example.demo.news;

import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsDetailRepository extends JpaRepository<NewsDetails, Long> {
    // Any additional methods or custom queries can be added here.
}
