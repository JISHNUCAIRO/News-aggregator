package com.example.demo.news;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewsApiArticleDTO {
    // @JsonProperty("source")
    // private String source;

    @JsonProperty("author")
    private String author;

    @JsonProperty("title")
    private String title;

    @JsonProperty("description")
    private String description;

    @JsonProperty("url")
    private String url;

    @JsonProperty("urlToImage")
    private String img_url; // Changed the field name to match the JSON field name

    @JsonProperty("publishedAt")
    private String p_date; // Changed the field name to match the JSON field name

    @JsonProperty("content")
    private String content;

    

    public NewsApiArticleDTO(String author, String title, String description, String url, String img_url, String p_date,
            String content) {
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.img_url = img_url;
        this.p_date = p_date;
        this.content = content;
    }

    public NewsApiArticleDTO() {
    }

    // Getters and setters...
    // Add getters and setters for all the attributes

    // public String getSource() {
    //     return source;
    // }

    // public void setSource(String source) {
    //     this.source = source;
    // }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
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

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public String getP_date() {
        return p_date;
    }

    public void setP_date(String p_date) {
        this.p_date = p_date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
