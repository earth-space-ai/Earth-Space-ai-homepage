# Speaker Notes

10-minute presentation + 5-minute Q&A. Speak naturally, not word-for-word.

## Slide 1: Title (30 sec)

"Hi, I'm Koutian Wu. This is ESM-bench, a benchmark for evaluating whether AI agents can modify Earth System Model code in a way that is physically valid, not just executable. We have 107 tasks across 3 evaluated codebases, with a full 8-ESM roadmap, and 4 physics task types."

**Transition:** "Why do we need this?"

## Slide 2: Why This Benchmark (45 sec)

"ESM development combines scientific reasoning with legacy Fortran code and physical constraints. A small edit can change long-horizon climate behavior. And a patch can compile and still be scientifically wrong.

Existing benchmarks like SWE-bench test Python code. Text-level climate benchmarks like ClimaBench and AtmosSci-Bench test scientific recall. Neither tests whether an AI can actually modify production Fortran physics code correctly."

**Transition:** "Let me show what codebases we cover."

## Slide 3: Coverage (30 sec)

"The roadmap covers 8 production ESM repositories, from Noah-MP at 44k lines to E3SM at nearly 2 million lines. They span land surface, hydrology, ocean, atmosphere, and coupled Earth systems, in Fortran 90, Fortran 2008, and C. The preliminary evaluated set currently covers 3 of these: Noah-MP, CLM5, and MOM6."

**Transition:** "How do we build tasks from these codebases?"

## Slide 4: Task Construction Pipeline (50 sec)

"Our pipeline has 5 steps. Step 0: we filter real human developer commits, discarding ambiguous ones. Step 1: we separate by ESM codebase. Step 2: given the correct source files and a physics description, the AI must produce a unified diff. Step 3: we classify each task into 4 physics categories. Step 4: we evaluate each task with 3 prompt variants for controlled ablation.

Every task traces to a public git commit. The ground truth is the real developer's diff."

**Transition:** "Here is what real commits look like."

## Slide 5: Tasks Come from Real Developer Commits (20 sec)

"These are actual Noah-MP commits. Bug fixes for unit conversions, temperature bias corrections, memory optimization. Each one becomes a benchmark task."

**Transition:** "We classify these into 4 types."

## Slide 6: Task Categories (30 sec)

"PBF is physics bug fixes, the most solvable. PO is parameter optimization. PRM is process representation modification, often requiring new code. PSS is scheme selection, among the hardest. Our 107 tasks break down as 39 PBF, 47 PRM, 15 PSS, and 6 PO."

**Transition:** "We also test whether giving the AI more prompt context helps."

## Slide 7: Prompt Ablation (30 sec)

"Inspired by ScienceAgentBench, we evaluate each task with 3 prompt variants. P1: physics description + full source. P2: P1 + subroutine names + line ranges. P3: P2 + deleted lines + Fortran ESM idioms. Same task and source at all prompts, so the comparison is clean."

**Transition:** "How do we evaluate the AI's output?"

## Slide 8: Physics-Aware 6-Item Rubric (45 sec)

"We compare AI-generated code against human expert modifications using a 6-item rubric. Each item is scored 0, 1, or 2. The items check whether the AI edited the right target, addressed the right physics, maintained local consistency, would compile, covered all edit sites, and preserved numerical safety.

This is a preliminary rubric. We are currently interviewing domain scientists and reviewing ESM evaluation literature to refine the scoring criteria."

**Transition:** "Now let me show what this looks like in practice."

## Slide 9: Review Panel - Task Description (20 sec)

"This is our human review panel. On the left, the task description and scientific background. On the right, what the AI actually produced. Reviewers can see everything the AI saw."

## Slide 10: Review Panel - Comparing AI vs Human (20 sec)

"Here the ground truth diff is on the left in green and red. The AI's output is on the right. The rubric scores whether the AI achieves the same physical result, not whether the lines match character by character."

## Slide 11: Review Panel - Cross-Model Inconsistency (20 sec)

"This MOM6 example shows where the AI's approach diverges from the human's. The review panel lets us see exactly where and why."

## Slide 12: Results (45 sec)

"Preliminary rubric scores from our LLM-as-judge panel, to be calibrated with human review. GPT-5.5 leads on Noah-MP and CLM5. Difficulty scales with codebase complexity. These scores are based on the P1 baseline, where the AI gets the physics description and full source."

**Transition:** "What did we learn?"

## Slide 13: Future Directions (30 sec)

"Four directions. First, improve the pipeline so tasks are fully unambiguous with fixed input and output. Second, build complex multi-commit tasks where the AI has to implement entire modules from scratch. Third, use real agent harnesses like Claude Code and Codex instead of single prompts. Fourth, expand to a domain journal submission with harder physics tasks."

## Slide 14: Takeaway (30 sec)

"Three reasons LLMs fail on ESM code. First, limited Fortran and C training data. ESM codebases are hundreds of thousands of lines in these languages, and LLMs have far less training on them. Second, physics reasoning does not transfer to code: models identify the issue but cannot produce the Fortran implementation. Third, multi-site edits are hard: many fixes need coordinated changes across subroutines, and LLMs miss companion edits.

To improve, we need agent harnesses with iterative debugging and structured ESM coding patterns as reusable skills."

## Q&A Preparation (5 min)

**Likely questions:**

1. "How do you handle multi-answer tasks where different code is equally correct?"
   - We tag tasks as single-answer vs multi-answer. The rubric scores physical equivalence, not line matching. If the AI's approach is physically valid but structurally different, it can still score high.

2. "Why not just run the code and check outputs?"
   - That is our future execution tier. Building Docker containers for each ESM is significant infrastructure. The rubric-based approach lets us evaluate now while that is being built.

3. "How do you prevent the LLM judge from being too lenient?"
   - We use a 2-judge panel (GPT-4.1 + Claude Haiku) and compute agreement. We are calibrating with human expert review on a subset.

4. "Why Fortran? Isn't that outdated?"
   - Most production climate models (CESM, WRF, MOM6, E3SM) are still primarily Fortran. This is not changing soon. If AI is going to help with climate science, it needs to handle Fortran.

5. "How does this compare to SWE-bench?"
   - SWE-bench tests Python repository-level issue resolution. ESM-bench tests Fortran/C physics code modification under physical validity constraints. Different language, different domain, different evaluation (physics rubric vs test suite pass).

## Delivery Reminders

- Keep it concrete. Show the screenshots, point at the diffs.
- Do not rush the rubric slide. That is the methodological contribution.
- When discussing results, say "preliminary, to be calibrated with human review."
- If time is tight, shorten slides 9-11 (review panel screenshots) to one slide.
