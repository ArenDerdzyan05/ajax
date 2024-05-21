const data = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank',   'Grace', 'Hannah', 'Ivy', 'Jack', 'Katie', 'Liam',
  'Mia', 'Noah', 'Olivia', 'Patrick', 'Quinn', 'Ryan',
  'Sophia', 'Thomas', 'Uma', 'Victor', 'Wendy', 'Xavier',
  'Yasmine', 'Zachary', 'Abigail', 'Benjamin', 'Chloe',
  'Daniel', 'Emily', 'Finn', 'Gabriel', 'Harper', 'Isaac'];

function filterData() {
    const query = document.getElementById('filter').value.toLowerCase();
    const results = document.getElementById('results');

    const filteredData = data.filter(name => name.toLowerCase().includes(query));

    results.innerHTML = filteredData.map(name => `<div>${name}</div>`).join('');
}
