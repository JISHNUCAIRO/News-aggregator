package com.example.demo.service;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewsApi {

    @JsonProperty("title")
    private String title;
    @JsonProperty("description")
    private String description;
    @JsonProperty("url")
    private String url;
    @JsonProperty("urlToImage")
    private String urlToImage;
    @JsonProperty("content")
    private String content;
	public NewsApi() {
		super();
		// TODO Auto-generated constructor stub
	}
	public NewsApi(String title, String description, String url, String urlToImage, String content) {
		super();
		this.title = title;
		this.description = description;
		this.url = url;
		this.urlToImage = urlToImage;
		this.content = content;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUrlToImage() {
		return urlToImage;
	}
	public void setUrlToImage(String urlToImage) {
		this.urlToImage = urlToImage;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}

 
    
    
}
