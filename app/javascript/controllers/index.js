// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application";

import DialogController from "./dialog_controller";
application.register("dialog", DialogController);

import FlashController from "./flash_controller";
application.register("flash", FlashController);

import HelloController from "./hello_controller";
application.register("hello", HelloController);

import TasksController from "./tasks_controller";
application.register("tasks", TasksController);

import CharacterCounter from "@stimulus-components/character-counter";
application.register("character-counter", CharacterCounter);

import Dropdown from "@stimulus-components/dropdown";
application.register("dropdown", Dropdown);
