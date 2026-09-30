results = [
    { name: "open login", status: "passed", durationMs: 400 },
    { name: "fill form", status: "failed", durationMs: 700 },
    { name: "submit", status: "skipped", durationMs: 0 }];

let summaryReport = {
    total: results.length,
    passed: results.filter(r => r.status === "passed").length,
    failed: results.filter(r => r.status === "failed").length,
    skipped: results.filter(r => r.status === "skipped").length
}

console.log(summaryReport);