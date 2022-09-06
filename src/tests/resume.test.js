const request = require("supertest");
const { createApp } = require("../../app");
const { AppDataSource } = require("../models/dataSource");

describe("get resumes", () => {
    let app;

    beforeAll(async () => {
        app = createApp();
        await AppDataSource.initialize()
            .then(() => {
            console.log("Data Source has been initialized");
            })
            .catch((err) => {
            console.error("Error during Data Source initialization", err);
            database.destroy()        
            });
    })

    afterAll(async () => {
        await AppDataSource.destroy();
    })

    test("SUCCES: GET_RESUMES_LIST", async() => {
        await request(app)
        .get("/resumes/List/1")
        .send({userId:1})
        .expect(200)
    })

    test("FAILED: GET_RESUMES_LIST", async() => {
        await request(app)
        .get("/resumes/resumesList/1")
        .send({userId:1})
        .expect(200)
    })

    test("SUCCES: GET_RESUME", async() => {
        await request(app)
        .get("/resumes/1")
        .send({resumesId:1})
        .expect(200)
    })
})