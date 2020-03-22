import { Injectable } from '@nestjs/common';

export class MyService {

    randonWord(): String{
        const words = ['Dev FullStack', 'Dev FullCycle', 'Dev NodeJS', 'Dev Golang', 'Dev Frontend'];
        const random = words[Math.floor(Math.random() * words.length)];
        return random;
    }

}