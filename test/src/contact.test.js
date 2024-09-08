import supertest from "supertest";
import contact from "../src/API/contact.js";
import { request } from "express";

describe("POST/contact", () => {
  describe("given first name ,lastname,phone no,email and note", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(contact).post("/contact").send({
        first_name: "first_name",
        last_name: "last_name",
        user_email: "user_email",
        phone_no: "phone_no",
        note: "note",
      });
      expect(response.statusCode).toBe(200);
    });
    // test("should have first name ,lastname,phone no,email and note", async () => {
    //   const response = await request(app).post("/contact").send({
    //     first_name: "first_name",
    //     last_name: "last_name",
    //     user_email: "user_email",
    //     phone_no: "phone_no",
    //     note: "note",
    //   });
    //   expect(re);
  });
  test("should specify json in the content type header", async () => {
    const response = await request(contact).post("/contact").send({
      first_name: "firstname",
      last_name: "lastname",
      user_email: "useremail",
      phone_no: "phoneno",
      note: "note",
    });
    expect(
      response.headers["content-type"].toEqual(expect.stringContaining("json"))
    );
  });
  describe("when the first name ,lastname,phone no,email and note is missing", () => {});
});
