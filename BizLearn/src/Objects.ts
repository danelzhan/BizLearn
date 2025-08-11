export class Course {
    thumbnail: string;
    title: string;
    description: string;
    lessons: Lesson[];

    constructor(thumbnail: string, title: string, description: string, lessons: Lesson[]) {
        this.thumbnail = thumbnail;
        this.title = title;
        this.description = description;
        this.lessons = lessons;
    }
}

export abstract class Lesson {
    title: string;
    description: string;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }
}

export class VideoLesson extends Lesson {
    url: string;

    constructor(title: string, description: string, url: string) {
        super(title, description);
        this.url = url;
    }
}

export class InteractiveLesson extends Lesson {
    html: string;
    css: string;
    js: string;

    constructor(title: string, description: string, html: string, css: string, js: string) {
        super(title, description);
        this.html = html;
        this.css = css;
        this.js = js;
    }
}

export class User {
    courseList: Course[];

    constructor(courseList: Course[]) {
        this.courseList = courseList
    }

}