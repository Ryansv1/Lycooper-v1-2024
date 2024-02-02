import { NextResponse } from "next/server";

export function middleware(){
    return NextResponse.json({
        hello: "middleware function"
    })
}

export function middleware2(){
    return NextResponse.json({
        hello: "middleware function 2"
    })
}

export const config = {
    matcher: "/dashboard/"

}