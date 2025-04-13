import { Presentation } from "../application/presentation";
import { Response } from "express";
export declare function toRequest<T>(res: Response, presentation: Presentation<T>): Response;
