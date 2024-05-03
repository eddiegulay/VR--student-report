// JavaScript object to store the metrics values
var metrics = {
    totalExperiments: 56,
    completedExperiments: 30,
    pendingExperiments: 26,
    successRate: 75,
    averageDuration: 20,
    totalQuestions: 120,
    questionSuccessRate: 80,
    experimentStreak: 5
};

// Function to display the metrics on the DOM
function displayMetrics() {
    document.getElementById('total-experiments').textContent = metrics.totalExperiments;
    document.getElementById('completed-experiments').textContent = metrics.completedExperiments;
    document.getElementById('pending-experiments').textContent = metrics.pendingExperiments;
    document.getElementById('success-rate').textContent = metrics.successRate;
    document.getElementById('average-duration').textContent = metrics.averageDuration;
    document.getElementById('total-questions-done').textContent = metrics.totalQuestions;
    document.getElementById('question-success-rate').textContent = metrics.questionSuccessRate;
    document.getElementById('epxeriment-streak').textContent = metrics.experimentStreak;
}

// Call the function to display the metrics
displayMetrics();