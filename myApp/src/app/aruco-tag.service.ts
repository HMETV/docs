// aruco-tag.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArucoTagService {
  private readonly TAGS_FILE_URL = 'http://192.168.56.1:8000/marker_ids.txt'; // Replace with the URL of your Python server

  constructor(private http: HttpClient) {}

  getTagIds() {
    return this.http.get(this.TAGS_FILE_URL, { responseType: 'text' });
  }
}
