import { Test, TestRunner } from "@everyonesoftware/test-typescript";
import { MochaTestRunner } from "@everyonesoftware/mocha-typescript";
import * as vscode from "vscode";

export function test(runner: TestRunner): void
{
    runner.testGroup("Integration Tests", () =>
    {
        runner.testAsync("execute non-existing command", async (test: Test) =>
        {
            await test.assertThrowsAsync(async () => await vscode.commands.executeCommand("i.dont.exist"), 
                new Error("command 'i.dont.exist' not found"));
        });
    });
}
test(MochaTestRunner.create());