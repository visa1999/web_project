function simulateNotifications() {
    setInterval(() => {
        if (!currentUser) return;
        const currentDate = new Date().toISOString().split('T')[0];
        currentUser.tasks.forEach(task => {
            if (!task.completed && task.dueDate && task.dueDate === currentDate) {
                alert(`Reminder: The task "${task.text}" is due today!`);
            }
        });
    }, 60000); // Check every minute
}
