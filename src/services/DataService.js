import http from "../http-common";

class DataService {
  blogs() {
    return http.get("/blogs");
  }
  recentblogs() {
    return http.get("/recentblogs");
  }
  singleBlog(pid) {
    return http.get(`/blogs/${pid}`);
  }
}

export default new DataService();