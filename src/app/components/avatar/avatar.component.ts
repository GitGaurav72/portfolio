import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="avatar-container">
      <div class="avatar">
        <div class="avatar-ring"></div>
        <div class="avatar-image">
          <img src="assets/images/profile.png" alt="Profile">
        </div>
        <span class="status-dot"></span>
      </div>
  
    </div>
  `,
  styles: [`
    .avatar-container {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }

    .avatar {
      position: relative;
      width: 45px;
      height: 45px;
    }

    .avatar-ring {
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.2);
      animation: rotate 4s linear infinite;
    }

    .avatar-image {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #1E1E1E;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .status-dot {
      position: absolute;
      bottom: 2px;
      right: 2px;
      width: 8px;
      height: 8px;
      background: #4CAF50;
      border-radius: 50%;
      border: 2px solid #1E1E1E;
    }

    .status-text {
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.7);
      text-transform: lowercase;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `]
})
export class AvatarComponent {}