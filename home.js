const allBtn = document.getElementById('all-Btn');
const openBtn = document.getElementById('open-Btn');
const closedBtn = document.getElementById('closed-Btn');
const issueContainer = document.getElementById('issue-container');




async function loadAllIssue() {
  const res = await fetch(
    'https://phi-lab-server.vercel.app/api/v1/lab/issues'
  );

  const data = await res.json();

  data.data.forEach((issue) => {
    const div = document.createElement('div');
    div.className =
      'p-5 border-t-5 border-green-600 rounded-2xl bg-slate-500 max-w-100 space-y-3';
      if(issue.status === 'open'){
        div.classList.add
      }
    div.innerHTML = `
     <div class="flex justify-between">
            <img src="./assets/Open-Status.png" alt="" />
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
              <i class="fa-solid fa-bug"></i>BUG
            </div>
            <div class="badge badge-soft badge-warning">
              <i class="fa-solid fa-helicopter-symbol"></i>help wanted
            </div>
          </div>
          <br />
          <hr />
          <br />
          <p class="text-slate-300">#${issue.assignee}</p>
          <p class="text-slate-300">${issue.updatedAt}</p>

   `;
    issueContainer.append(div);
  });
}

loadAllIssue();

allBtn.addEventListener('click', () => {
  issueContainer.innerHTML =""

  loadAllIssue();
});

openBtn.addEventListener('click', () => {
   issueContainer.innerHTML = '';
   
   async function openIssue() {
     const res = await fetch(
       'https://phi-lab-server.vercel.app/api/v1/lab/issues'
     );

     const data = await res.json();

     const issues = data.data;
     for (const open of issues) {
       if (open.status === 'open') {
        console.log(open);
        const div = document.createElement('div')
        div.className =
          'p-5 border-t-5 border-green-600 rounded-2xl bg-slate-500 max-w-100 space-y-3';
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
              <i class="fa-solid fa-bug"></i>BUG
            </div>
            <div class="badge badge-soft badge-warning">
              <i class="fa-solid fa-helicopter-symbol"></i>help wanted
            </div>
          </div>
          <br />
          <hr />
          <br />
          <p class="text-slate-300">#${open.assignee}</p>
          <p class="text-slate-300">${open.updatedAt}</p>

          `;
          issueContainer.append(div);
         
       }
     }
   };

  openIssue();
});




closedBtn.addEventListener('click', () => {
  issueContainer.innerHTML = '';

  async function closedIssue() {
    const res = await fetch(
      'https://phi-lab-server.vercel.app/api/v1/lab/issues'
    );

    const data = await res.json();

    const issues = data.data;
    for (const closed of issues) {
      if (closed.status === 'closed') {
        console.log(closed);
        const div = document.createElement('div');
        div.className =
          'p-5 border-t-5 border-[#A855F7] rounded-2xl bg-slate-500 max-w-100 space-y-3 ';
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
              <i class="fa-solid fa-bug"></i>BUG
            </div>
            <div class="badge badge-soft badge-warning">
              <i class="fa-solid fa-helicopter-symbol"></i>help wanted
            </div>
          </div>
          <br />
          <hr />
          <br />
          <p class="text-slate-300">#${closed.assignee}</p>
          <p class="text-slate-300">${closed.updatedAt}</p>

          `;
        issueContainer.append(div);
      }
    }
  }

  closedIssue();
});



