import http from "@/api/http";

export async function store(title, content) {
    return http.post('board', {
        title,
        content
    });
}