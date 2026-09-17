document.querySelectorAll('[data-copy]').forEach(btn=>{btn.addEventListener('click',()=>copyFrom(btn))});

async function copyFrom(btn){
  const el=document.querySelector(btn.dataset.copy);
  if(!el)return;
  try{
    await navigator.clipboard.writeText(el.innerText);
    const old=btn.textContent;
    btn.textContent='Copied';
    setTimeout(()=>btn.textContent=old,1200);
  }catch(e){}
}

const flow=[
  {q:'Was generative AI intentionally used for substantive development?', yes:1, no:'None'},
  {q:'Could AI substantially complete the project from the initial goal without intermediate human steering?', yes:'Autonomous', no:2},
  {q:'Did AI routinely own substantial multi-step features or tasks between human checkpoints?', yes:'Supervised', no:3},
  {q:'Did human and AI routinely shape decisions and implementation together in short feedback loops?', yes:'Collaborative', no:4},
  {q:'Did the human define the architecture/approach and delegate bounded implementation tasks?', yes:'Directed', no:5},
  {q:'Did the human perform core implementation while AI mainly provided support?', yes:'Assistive', no:'Incidental'}
];

const question=document.querySelector('#chooser-q');
const answers=document.querySelector('#chooser-answers');
const result=document.querySelector('#chooser-result');
let idx=0;

function badgeSnippet(mode){
  return '[![AI Development: '+mode+'](https://img.shields.io/badge/AI%20Development-'+encodeURIComponent(mode)+'-f97316)](https://aidevmode.org/)';
}

function render(){
  if(!question)return;
  question.textContent=flow[idx].q;
  question.style.display='';
  answers.style.display='';
  result.classList.remove('visible');
}

function showResult(mode){
  question.style.display='none';
  answers.style.display='none';
  result.innerHTML=
    '<p><strong>Likely mode: '+mode+'</strong><br><span class="small">Use this as a starting point. If materially different workflows are common, consider Mixed or scoped declarations.</span></p>'+
    '<div class="snippet"><div class="snippet-head"><span>Badge for your README</span><button class="link" data-copy="#chooser-snippet">Copy</button></div>'+
    '<pre id="chooser-snippet"></pre></div>'+
    '<p class="small"><a href="adopt.html">Optionally add a <code>.aidm.json</code> profile</a> · <button class="link" id="chooser-reset">Start over</button></p>';
  result.querySelector('#chooser-snippet').textContent=badgeSnippet(mode);
  result.querySelector('[data-copy]').addEventListener('click',e=>copyFrom(e.currentTarget));
  result.querySelector('#chooser-reset').addEventListener('click',()=>{idx=0;render()});
  result.classList.add('visible');
}

function choose(kind){
  const next=flow[idx][kind];
  if(typeof next==='string'){showResult(next)}else{idx=next;render()}
}

if(question){
  document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>choose(b.dataset.answer)));
  render();
}
