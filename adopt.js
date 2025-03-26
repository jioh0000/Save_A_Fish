const fishData = [
    { id: 'clown', name: 'Clownfish: $5', desc: 'description descriptiondescription description description description description description description description description description', img: 'images/nemo.png'},
    { id: 'blue-tang', name: 'Tuna: $10', desc: 'description description description description description descriptiondescription description description description description description description description description description', img: 'images/tuna.png'},
    { id: 'lionfish', name: 'Seahorse: $20', desc: 'description description description description description descriptiondescription description description description description description description description description description', img: 'images/seahorse.png'},
    { id: 'guppy', name: 'Squid: $50', desc: 'description description description 재혁이 description description descriptiondescription 개병신 description description description description description description description description', img: 'images/squidgame.png'},
    { id: 'betta', name: 'Shark: $100', desc: 'description description description description description descriptiondescription description description description description description description description description description', img: 'images/shark.png'},
    { id: 'goldfish', name: 'Whale: $200', desc: 'description description description description description descriptiondescription description description description description description description description description description description', img: 'images/whale.png'}
  ]; 
  
  const fishList = document.getElementById('fish-list');
  const counts = Object.fromEntries(fishData.map(f => [f.id, 0]));
  
  fishData.forEach(fish => {
    const wrapper = document.createElement('div');
    wrapper.className = 'fish-card';
    wrapper.innerHTML = `
        <div class="fish-info">
            <img src="${fish.img}" alt="${fish.name}" class="fish-img" />
            <div class="fish-desc">
            <strong>${fish.name}</strong><br />
            <span>${fish.desc}</span>
            </div>
        </div>
        <div class="fish-controls">
            <button class="minus-btn" data-id="${fish.id}">−</button>
            <span id="count-${fish.id}" class="fish-count">0</span>
            <button class="plus-btn" data-id="${fish.id}">+</button>
        </div>
    `;

    fishList.appendChild(wrapper);
  });
  
  document.querySelectorAll('.plus-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      counts[id]++;
      document.getElementById(`count-${id}`).textContent = counts[id];
    })
  );
  
  document.querySelectorAll('.minus-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (counts[id] > 0) counts[id]--;
      document.getElementById(`count-${id}`).textContent = counts[id];
    })
  );
  
  document.getElementById('adopt-button').addEventListener('click', () => {
  
    // Reset counts and update the UI (adopt page)
    Object.keys(counts).forEach(id => {
      counts[id] = 0;
      document.getElementById(`count-${id}`).textContent = '0';
    });
  });
  
  