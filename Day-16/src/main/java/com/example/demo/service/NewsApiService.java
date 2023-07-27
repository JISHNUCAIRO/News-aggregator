package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import com.example.demo.service.NewsApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.model.NewsSource;
import com.example.demo.repository.NewsRepo;

@Service
public class NewsApiService {
private final RestTemplate restTemp;
private final String apiUrl;
private final String apiKey;
private final NewsRepo newsrepo;

@Autowired
public NewsApiService(RestTemplate restTemp,
        @Value("${newsapi.url}") String apiUrl,
        @Value("${newsapi.apikey}") String apiKey,
        NewsRepo newsrepo) {
this.restTemp = restTemp;
this.apiUrl = apiUrl;
this.apiKey = apiKey;
this.newsrepo= newsrepo;
}
public List<NewsSource> fetchNews() {
//  String url = apiUrl + "?apiKey=" + apiKey;
	String url = "https://newsapi.org/v2/everything?q=apple&from=2023-07-23&to=2023-07-23&sortBy=popularity&apiKey=58f87828eb9a4aa581360633875d3d05";
  ResponseEntity<NewsApiResponse> response = restTemp.getForEntity(url, NewsApiResponse.class);
  List<NewsSource> news = new ArrayList<>();
  if (response.getStatusCode().is2xxSuccessful()) {
      NewsApiResponse newsApiResponse = response.getBody();
      if (newsApiResponse != null && newsApiResponse.getNews() != null) {
          for (NewsApi newsApi : newsApiResponse.getNews()) {
          	System.out.println(newsApi.getContent());
              news.add(mapToNewsDetails(newsApi));
          }
      }
  }
  
  return news;
}
private NewsSource mapToNewsDetails(NewsApi newsApi) {
    NewsSource ns = new NewsSource();
//    ns.setAuthor(newsApi.getAuthor());
    ns.setTitle(newsApi.getTitle());
    ns.setDescription(newsApi.getDescription());
    ns.setUrl(newsApi.getUrl());
    ns.setUrlToImage(newsApi.getUrlToImage());
//    ns.setP_date(newsApi.getPublishedAt());
    ns.setContent(newsApi.getContent());
    ns.setLikes(0);
    ns.setSaved(false);
    return ns;
}
public String saveNewsToDatabase() {
    List<NewsSource> news = fetchNews();
    newsrepo.saveAll(news);
    return "Data Updated";
}
}
