import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  companies = [
    'Google',
    'BARCLAYS',
    'Inc.',
    'Microsoft',
    'BUSINESS INSIDER',
    'Entrepreneur',
    'Forbes',
    'AI-BUSINESS'
  ];

  newsItems = [
    'Already get by growing society',
    'Nvidia Release new way of producing NFT\'s',
    'Simon Lizotte take a big advance in the last tournament',
    'An Extraordinary WHDL has been released by great china scientist'
  ];
}