package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.NewsSource;

@Repository
public interface NewsRepo extends JpaRepository<NewsSource,Integer> {
 void save(List<NewsSource> articles);
}
  