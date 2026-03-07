const allBtn = document.getElementById('all-Btn');
const openBtn = document.getElementById('open-Btn');
const closedBtn = document.getElementById('closed-Btn');
const issueContainer = document.getElementById('issue-container');
const countIssue = document.getElementById('count-Issue');
const loading = document.getElementById('loading');



async function loadAllIssue() {
  loading.classList.remove('hidden')
  loading.classList.add('flex');
  const res = await fetch(
    'https://phi-lab-server.vercel.app/api/v1/lab/issues'
  );

  const data = await res.json();
  loading.classList.add('hidden');

  data.data.forEach((issue) => {
    const div = document.createElement('div');
    div.className =
      'p-5 border-t-5  rounded-2xl bg-slate-500 max-w-100 space-y-3';
    if (issue.status === 'open') {
      div.classList.add('border-green-600');
    } else if (issue.status === 'closed') {
      div.classList.remove('border-green-600');
      div.classList.add('border-[#A855F7]');
    }
    div.innerHTML = `
     <div class="flex justify-between">
            <img  src="${issue.status === 'open' ? './assets/Open-Status.png' : './assets/Closed- Status .png'}" alt="" />
            <p class="px-5 rounded-full bg-red-200">${issue.priority}</p>
          </div>
          <h3 class="font-semibold text-xl">
            ${issue.title}
          </h3>
          <p class="text-slate-300">
            ${issue.description}
          </p>
          <div class="">
            <div class="badge badge-soft badge-error">
              <i class="fa-solid fa-bug"></i>${issue.labels[0]}
            </div>
            <div class="badge badge-soft badge-warning">
              <i class="fa-solid fa-helicopter-symbol"></i>${issue.labels[1] ? issue.labels[1] : ''}
            </div>
          </div>
          <br />
          <hr />
          <br />
          <p class="text-slate-300">#${issue.author}</p>
          <p class="text-slate-300">${new Date(issue.createdAt).toLocaleDateString('en-GB')}</p>

   `;
    issueContainer.append(div);
  });


  countIssue.innerText = data.data.length;
}



loadAllIssue();

function countCards() {
  const cards = document.querySelectorAll('.card');
  const total = cards.length;
  countIssue.innerText = total;
}

allBtn.addEventListener('click', () => {
  issueContainer.innerHTML = '';

  loadAllIssue();
});

openBtn.addEventListener('click', () => {
  issueContainer.innerHTML = '';

  async function openIssue() {
    loading.classList.remove('hidden');
    loading.classList.add('flex');
    const res = await fetch(
      'https://phi-lab-server.vercel.app/api/v1/lab/issues'
    );

    const data = await res.json();
loading.classList.add('hidden');
    const issues = data.data;
    for (const open of issues) {
      if (open.status === 'open') {
        console.log(open);
        const div = document.createElement('div');
        div.className =
          'p-5 border-t-5 border-green-600 rounded-2xl bg-slate-500 max-w-100 space-y-3 card';
        div.innerHTML = `
             <div class="flex justify-between">
            <img src="./assets/Open-Status.png" alt="" />
           
            <p class="px-5 rounded-full bg-red-200">${open.priority}</p>
          </div>
          <h3 class="font-semibold text-xl">
            ${open.title}
          </h3>
          <p class="text-slate-300">
            ${open.description}
          </p>
          <div class="">
            <div class="badge badge-soft badge-error">
              <i class="fa-solid fa-bug"></i>${open.labels[0]}
            </div>
            <div class="badge badge-soft badge-warning">
              <i class="fa-solid fa-helicopter-symbol"></i>${open.labels[1] ? open.labels[1] : ''}
            </div>
          </div>
          <br />
          <hr />
          <br />
          <p class="text-slate-300">#${open.author}</p>
          <p class="text-slate-300">${new Date(open.createdAt).toLocaleDateString('en-GB')}</p>

          `;
        issueContainer.append(div);
      }

    }
        

countCards();
  }

  openIssue();
  

});

closedBtn.addEventListener('click', () => {
  issueContainer.innerHTML = '';

  async function closedIssue() {
    loading.classList.remove('hidden');
    loading.classList.add('flex');
    const res = await fetch(
      'https://phi-lab-server.vercel.app/api/v1/lab/issues'
    );

    const data = await res.json();
      loading.classList.add('hidden');

    const issues = data.data;
    for (const closed of issues) {
      if (closed.status === 'closed') {
        console.log(closed);
        const div = document.createElement('div');
        div.className =
          'p-5 border-t-5 border-[#A855F7] rounded-2xl bg-slate-500 max-w-100 space-y-3 card';
        div.innerHTML = `
             <div class="flex justify-between">
            <img src="./assets/closed- Status .png" alt="" />
           
            <p class="px-5 rounded-full bg-red-200">${closed.priority}</p>
          </div>
          <h3 class="font-semibold text-xl">
            ${closed.title}
          </h3>
          <p class="text-slate-300">
            ${closed.description}
          </p>
          <div class="">
            <div class="badge badge-soft badge-error">
              <i class="fa-solid fa-bug"></i>${closed.labels[0]}
            </div>
            <div class="badge badge-soft badge-warning">
              <i class="fa-solid fa-helicopter-symbol"></i>${closed.labels[1] ? closed.labels[1] : ''}
            </div>
          </div>
          <br />
          <hr />
          <br />
          <p class="text-slate-300">#by ${closed.author}</p>
          <p class="text-slate-300">${new Date(closed.createdAt).toLocaleDateString('en-GB')}</p>

          `;
        issueContainer.append(div);
      }
    }
    countCards();
  }

  closedIssue();
});
