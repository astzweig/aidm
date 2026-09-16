document.querySelectorAll('[data-copy]').forEach(btn=>{btn.addEventListener('click',async()=>{const el=document.querySelector(btn.dataset.copy);if(!el)return;try{await navigator.clipboard.writeText(el.innerText);const old=btn.textContent;btn.textContent='Copied';setTimeout(()=>btn.textContent=old,1200)}catch(e){}})});

const flow=[
  {q:'Was generative AI intentionally used for substantive development?', yes:1, no:'None'},
  {q:'Could AI substantially complete the project from the initial goal without intermediate human steering?', yes:'Autonomous', no:2},
  {q:'Did AI routinely own substantial multi-step features or tasks between human checkpoints?', yes:'Supervised', no:3},
  {q:'Did human and AI routinely shape decisions and implementation together in short feedback loops?', yes:'Collaborative', no:4},
  {q:'Did the human define the architecture/approach and delegate bounded implementation tasks?', yes:'Directed', no:5},
  {q:'Did the human perform core implementation while AI mainly provided support?', yes:'Assistive', no:'Incidental'}
];
let idx=0; const q=document.querySelector('#chooser-q'), box=document.querySelector('#chooser-result');
function render(){if(q)q.textContent=flow[idx].q}
function choose(kind){const next=flow[idx][kind];if(typeof next==='string'){box.style.display='block';box.innerHTML='<strong>Likely mode: '+next+'</strong><br><span class="small">Use this as a starting point. If materially different workflows are common, consider Mixed or scoped declarations.</span>'}else{idx=next;render()}}
document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>choose(b.dataset.answer)));
const reset=document.querySelector('#chooser-reset'); if(reset)reset.addEventListener('click',()=>{idx=0;box.style.display='none';render()}); render();