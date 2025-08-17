# 🎯 Frontend Mastery Journey - 6-Month Study Plan

## Project Context
This repository contains a comprehensive 6-month study plan to transition from frontend-first knowledge to junior developer level ready for the Australian job market. The plan is structured as a 24-week journey with weekly deliverables, projects, and skill progression tracking.

**Student Profile**: Has basic frontend knowledge, targeting junior frontend developer roles in Australia  
**Timeline**: January 2025 - June 2025 (24 weeks)  
**Track Options**: Core Frontend (Weeks 1-12) → Choose Advanced Frontend OR Full-Stack (Weeks 13-20) → Job Readiness (Weeks 21-24)

## Repository Structure & Professional Workflow
```
frontend-mastery-journey/
├── README.md                   # Repository usage guide and workflow
├── CLAUDE.md                  # This file - Context for Claude Code reviews
├── PROGRESS.md                # Weekly progress and skills tracking
├── RESOURCES.md               # Comprehensive learning resources
├── .github/                   # Professional development workflow
│   ├── workflows/             # Automated CI/CD pipeline
│   │   ├── week-review.yml    # Quality gates and validation
│   │   └── claude-review.yml  # Claude Code review automation
│   ├── PULL_REQUEST_TEMPLATE.md # Structured week completion reviews
│   └── CODEOWNERS            # Claude Code as core reviewer
├── weeks/                     # Weekly projects and exercises
│   ├── week-01-html-semantics/ # Current: TechShop e-commerce project
│   ├── week-02-css-layout/     # CSS Grid/Flexbox mastery
│   └── ...                     # All 24 weeks structured
├── projects/                   # Major deliverable projects
│   ├── project-1-job-tracker/  # Weeks 9-12: Main SPA project
│   ├── project-2-portfolio/    # Weeks 19-20: Portfolio/job board
│   └── capstone/              # Final showcase project
└── notes/                     # Learning tracking and preparation
    ├── daily-log.md           # Daily learning entries
    ├── interview-prep/        # Technical interview preparation
    └── job-applications/      # Job search tracking
```

## Complete 24-Week Study Plan

### 🎯 WEEKS 1-12: Core Frontend Foundation

#### Week 1: HTML Semantics + Accessibility (CURRENT)
**Project**: TechShop E-commerce Homepage  
**Focus**: Semantic HTML, WCAG 2.2 AA compliance, responsive design  
**Skills**: Landmarks, skip links, ARIA attributes, screen reader compatibility  
**Deliverables**: 
- Accessible e-commerce homepage with Lighthouse score ≥90
- Responsive design (mobile-first)
- Deployed to public URL with case study documentation

#### Week 2: CSS Layout - Flexbox + Grid
**Project**: Rebuild Week 1 with advanced CSS techniques  
**Focus**: CSS Grid for 2D layouts, Flexbox for 1D, container queries  
**Skills**: Aspect-ratio, layout shift prevention, responsive breakpoints  
**Deliverables**: 
- Before/after performance comparison
- CLS screenshots demonstrating improvement
- Deploy to Netlify/Vercel with documentation

#### Week 3: JavaScript Fundamentals
**Project**: Interactive utilities and demos  
**Focus**: Variables/scope/closures, array/object methods, async patterns  
**Skills**: Pure functions, modules, fetch + error handling, debounce/throttle  
**Deliverables**: 
- Debounce, throttle, groupBy implementations
- Demo page showcasing utilities
- Gist explaining debounce vs throttle with examples

#### Week 4: TypeScript Foundations + Git Mastery
**Project**: Convert Week 3 to TypeScript with advanced Git workflow  
**Focus**: Basic types, unions, narrowing, generics, Git rebase workflow  
**Skills**: TS in Vite + React setup, ESLint/Prettier, PR management  
**Deliverables**: 
- Week 3 project converted to TypeScript with strict mode
- PR workflow with rebase demonstrated
- Screenshot of passing type-check

#### Week 5: React Core Concepts
**Project**: JobList component with state management  
**Focus**: Components, props/state, keys, lifting state, conditional UI  
**Skills**: List rendering, derived state, component composition  
**Deliverables**: 
- JobList + JobItem demo with single expand functionality
- State managed in parent component
- Stable keys implementation, deployed preview

#### Week 6: Forms + Accessibility
**Project**: "Add Job" form with comprehensive accessibility  
**Focus**: Controlled inputs, labels, error handling, React Hook Form + Zod  
**Skills**: ARIA-live announcements, keyboard navigation, validation UX  
**Deliverables**: 
- Accessible form with RHF + Zod validation
- Submit disabled until valid, proper error announcements
- A11y testing with Testing Library in unit tests

#### Week 7: Server State with React Query
**Project**: Job data fetching with caching and UX states  
**Focus**: TanStack Query, caching strategies, loading/error states  
**Skills**: staleTime, retries, refetchOnWindowFocus, pagination  
**Deliverables**: 
- Jobs fetched from mock API (JSON Server or dummyjson)
- Filters + pagination implementation
- React Query DevTools screenshot

#### Week 8: Testing Fundamentals
**Project**: Comprehensive testing suite for job application features  
**Focus**: Jest + React Testing Library, Playwright/Cypress E2E  
**Skills**: Unit/integration testing, testable component design  
**Deliverables**: 
- Tests for add/delete and filter flows
- One E2E "create application" happy path test
- CI-ready test scripts and coverage reporting

#### Week 9: Project 1 Start - Job Tracker SPA
**Project**: Architecture and foundation of main project  
**Focus**: Vite + React + TS setup, routing, state management architecture  
**Skills**: Project structure, accessibility-first development  
**Deliverables**: 
- Repository "job-tracker-frontend" created
- Routes: /, /applications, /applications/:id implemented
- UI skeleton committed and deployed with navigation

#### Week 10: Project 1 Features - Core Functionality
**Project**: CRUD operations and user interface  
**Focus**: localStorage persistence, filters/sort, proper loading states  
**Skills**: Image optimization, layout shift prevention  
**Deliverables**: 
- Complete CRUD flows with localStorage persistence
- Status filters and sorting functionality
- Lighthouse LCP/CLS scores in "Good" range, demo video

#### Week 11: Project 1 Quality - Testing & Error Handling
**Project**: Production-ready code quality and reliability  
**Focus**: Test coverage, error boundaries, performance optimization  
**Skills**: Code splitting, accessibility testing, edge case handling  
**Deliverables**: 
- Test coverage ≥60% with coverage report
- E2E tests running successfully (screenshot)
- README with accessibility and performance notes

#### Week 12: CI/CD + Polish - Professional Workflow
**Project**: Professional development workflow setup  
**Focus**: GitHub Actions, automated testing, conventional commits  
**Skills**: Type-checking in CI, linting, automated deployments  
**Deliverables**: 
- GitHub Actions workflow YAML for PR checks
- Green PR status checks (screenshot)
- Feature branch → PR workflow documentation

### 🔀 WEEKS 13-20: Choose Your Track

#### Option A: Frontend Advanced (Recommended Baseline)

**Week 13**: Advanced Accessibility - WCAG 2.2 AA mastery  
**Week 14**: Performance Optimization - Core Web Vitals tuning  
**Week 15**: Design System Basics - Component API design  
**Week 16**: Forms at Scale - Multi-step wizards, async validation  
**Week 17**: Data Fetching Patterns - Infinite scroll, optimistic updates  
**Week 18**: Project 1 Polish + Case Study - Portfolio preparation  
**Week 19**: Project 2 (Frontend) - Job Board Explorer with public APIs  
**Week 20**: Project 2 Quality - Visual testing, accessibility audit  

#### Option B: Full-Stack Extension

**Week 13**: API Design + Validation - Next.js/Express with Zod  
**Week 14**: Database + SQL - Prisma schema, migrations, indexes  
**Week 15**: Auth + Security - Sessions, CORS, CSRF, OWASP mitigations  
**Week 16**: AWS Deployment - S3 + CloudFront, API Gateway + Lambda  
**Week 17**: File Uploads + S3 - Signed URLs, content validation  
**Week 18**: Observability - Logging, Sentry, rate limiting  
**Week 19**: Project 2 (Full-Stack) - Multi-user Job Tracker v2  
**Week 20**: Project 2 Quality - API testing, production deployment  

### 🎯 WEEKS 21-24: Job Market Readiness

#### Week 21: Portfolio + Professional Presence
**Focus**: GitHub profile optimization, case study creation  
**Deliverables**: Portfolio page, 2 complete case studies with metrics  
**Skills**: Professional documentation, visual presentation

#### Week 22: Technical Interview Preparation
**Focus**: DOM/accessibility drills, React patterns, algorithm practice  
**Deliverables**: Study sheet, 2 recorded practice sessions, Q&A document  
**Skills**: Live coding, technical explanation, problem-solving

#### Week 23: Behavioral + System Design
**Focus**: STAR stories, frontend architecture discussions  
**Deliverables**: 6 STAR stories, architecture diagrams for projects  
**Skills**: Communication, leadership examples, technical decision-making

#### Week 24: Job Applications (Australia Focus)
**Focus**: Resume optimization, job applications, recruiter outreach  
**Deliverables**: 15-25 targeted applications, application tracking system  
**Skills**: ATS optimization, networking, salary negotiation preparation

## Quality Standards & Acceptance Criteria

### Technical Excellence
- **Accessibility**: Lighthouse accessibility score ≥90 on all projects
- **Performance**: Core Web Vitals in "Good" range, measurable improvements
- **Testing**: Unit/integration coverage ≥60%, at least one E2E per project
- **TypeScript**: Strict mode enabled, minimal `any` usage, proper generics
- **Git Workflow**: Clean commit history, meaningful messages, PR-based development

### Professional Standards
- **Documentation**: Every project has comprehensive README with screenshots
- **Code Quality**: ESLint/Prettier configured, consistent style
- **Deployment**: All projects deployed with public URLs
- **Case Studies**: Problem → approach → results format with metrics

### Australian Job Market Preparation
- **Resume**: ATS-friendly format with quantifiable achievements
- **Portfolio**: 2 polished projects with live demos and technical write-ups
- **Network**: LinkedIn optimized, connected to Australian tech community
- **Interview Skills**: Technical and behavioral preparation completed

## Weekly Workflow & Habits

### Daily Structure (2-3 hours recommended)
1. **Learn** (45-60min): Official documentation + supplementary articles
2. **Build** (60-90min): Feature implementation with commits
3. **Test/Polish** (30-45min): Testing, refactoring, accessibility checks
4. **Document** (10-15min): Update daily log, progress tracking

### Weekly Deliverables Checklist
- [ ] Feature implemented and working locally
- [ ] Tests written and passing (unit + integration minimum)
- [ ] Deployed to public URL with proper CI/CD
- [ ] Documentation updated (README + learning notes)
- [ ] Progress tracking updated in PROGRESS.md
- [ ] At least one meaningful PR merged
- [ ] Weekly reflection completed

### Progress Tracking Requirements
- **Daily Log**: Record learnings, challenges, and insights in `notes/daily-log.md`
- **Weekly Progress**: Update skills matrix and milestone progress in `PROGRESS.md`
- **Project Documentation**: Maintain case studies for portfolio development
- **Resource Collection**: Add valuable resources discovered to `RESOURCES.md`

## Australian Job Market Context

### Target Companies & Roles
- **Government**: Digital.gov.au, Services Australia (accessibility focus)
- **Enterprise**: Atlassian, Canva, REA Group (component libraries, performance)
- **Startups**: Culture Amp, Deputy, Airtasker (full-stack capabilities)
- **Consulting**: Thoughtworks, Deloitte Digital (client-facing development)

### Key Skills for AU Market
- **Accessibility Expertise**: Government contracts require WCAG compliance
- **Performance Focus**: Mobile-first market with varying connection speeds
- **Component Architecture**: Enterprise focus on design systems and reusability
- **Full-Stack Awareness**: Many roles expect backend understanding
- **Professional Communication**: Client-facing roles common in consulting

### Salary Expectations (2025)
- **Graduate/Junior**: $65K-$85K AUD
- **Mid-Level (2-3 years)**: $85K-$110K AUD
- **Senior (4+ years)**: $110K-$140K AUD
- **Lead/Principal**: $140K+ AUD

## Success Metrics & Milestones

### Week 12 Milestone: Core Frontend Complete
- [ ] Job Tracker SPA fully functional with testing
- [ ] Accessibility expertise demonstrated (Lighthouse ≥90)
- [ ] Professional Git workflow established
- [ ] CI/CD pipeline operational
- [ ] First project case study complete

### Week 20 Milestone: Advanced Skills Complete
- [ ] Second major project completed
- [ ] Performance optimization expertise
- [ ] Design system or full-stack skills
- [ ] Professional portfolio ready
- [ ] Technical interview preparation done

### Week 24 Milestone: Job Market Ready
- [ ] 15-25 job applications submitted
- [ ] Professional network established
- [ ] Interview skills polished
- [ ] Salary negotiation prepared
- [ ] Employment secured or strong pipeline established

## Professional Development Workflow (ESTABLISHED)

### 🤖 Claude Code Review Integration
This repository now features a **professional code review workflow** with Claude Code as the core reviewer:

#### **Automated Review Process**:
1. **Student Creates PR** → GitHub Actions automatically trigger quality gates
2. **Quality Validation** → Accessibility, performance, testing, documentation checks
3. **Claude Code Review Request** → Automated technical assessment and career guidance
4. **Feedback & Iteration** → Student addresses recommendations for professional growth
5. **Approval & Advancement** → Week completion verified before progressing

#### **GitHub Actions Workflow** (.github/workflows/):
- **week-review.yml**: Validates completion criteria, runs quality checks
- **claude-review.yml**: Triggers Claude Code review requests with detailed analysis
- **Quality Gates**: Accessibility ≥90, testing coverage, documentation requirements
- **Progress Tracking**: Ensures PROGRESS.md and daily-log.md are updated

#### **Professional Standards Enforced**:
- ✅ **Code Quality**: ESLint, Prettier, TypeScript strict mode
- ✅ **Accessibility**: WCAG 2.2 AA compliance (Lighthouse ≥90)
- ✅ **Testing**: Unit tests minimum, E2E for major features
- ✅ **Documentation**: README updates, learning logs, case studies
- ✅ **Deployment**: Public URLs required for all projects
- ✅ **Git Workflow**: Meaningful commits, professional PR descriptions

### **Claude Code Review Focus Areas**:
- **Technical Excellence**: Code standards, best practices, performance optimization
- **Accessibility Expertise**: WCAG compliance, screen reader support, keyboard navigation
- **Career Readiness**: Professional development practices, portfolio quality
- **Learning Progression**: Skill development, concept mastery, week advancement criteria
- **Australian Job Market**: Skills alignment with AU employer expectations

## Important Notes for Claude Code Reviews

### When Reviewing This Project:
1. **Check Current Status** - Always refer to PROGRESS.md for current week and completion status
2. **Enforce Quality Standards** - Accessibility ≥90, performance, testing, documentation requirements
3. **Australian Context** - Focus on job market, companies, salary expectations in Australia
4. **Professional Development** - This is career preparation, not just learning - maintain high standards
5. **Weekly Advancement** - Only approve advancement when ALL criteria are met

### Review Process Guidelines:
1. **Technical Assessment** - Code quality, best practices, performance, accessibility
2. **Learning Validation** - Verify concepts are properly understood and implemented
3. **Career Preparation** - Ensure professional practices and portfolio quality
4. **Progress Tracking** - Confirm documentation and learning logs are updated
5. **Advancement Decision** - Clear approval or feedback for week completion

### File Review Priorities:
1. **Current week folder** (`weeks/week-XX-*/`) - Primary implementation focus
2. **PROGRESS.md** - Weekly progress tracking and skill development validation
3. **Daily log** (`notes/daily-log.md`) - Learning accountability and insights
4. **Project folders** (`projects/`) - Major deliverables for portfolio development
5. **Week README** - Learning documentation and case study development

### Automated Quality Gates (DO NOT BYPASS):
- ✅ **Accessibility Standards**: Lighthouse accessibility score ≥90 (WCAG 2.2 AA)
- ✅ **Testing Coverage**: Unit tests minimum, integration tests for complex features
- ✅ **Public Deployment**: All projects must have live, accessible URLs
- ✅ **Documentation**: README updates, learning logs, progress tracking required
- ✅ **Code Quality**: ESLint/Prettier passing, TypeScript strict mode
- ✅ **Professional Git**: Meaningful commits, clean history, proper PR descriptions

### Week Advancement Criteria (STRICT):
**A week is NOT complete until ALL criteria are met:**
1. **Core Implementation**: All learning objectives demonstrated in working code
2. **Quality Standards**: Accessibility, performance, testing requirements fulfilled
3. **Documentation**: Learning logs updated, README case study written
4. **Deployment**: Project live at public URL with proper functionality
5. **Professional Practices**: Git workflow, commit quality, PR standards maintained

### Career-Focused Review Approach:
**Every review decision should consider**: *"Does this prepare the student for a junior developer role in Australia?"*

- **Code Quality**: Industry-standard practices and maintainable code
- **Accessibility**: Government and enterprise requirements (WCAG compliance)
- **Professional Communication**: Technical documentation and explanation skills
- **Problem-Solving**: Debugging, testing, and iterative improvement
- **Learning Progression**: Building on previous weeks, preparing for advanced topics

---

## Current Project Status

**Active Week**: Week 1 - HTML Semantics + Accessibility (TechShop e-commerce project)  
**Current Phase**: Professional workflow established, ready for implementation  
**Next Milestone**: Week 12 - Core Frontend Foundation Complete  
**Ultimate Goal**: Junior Frontend Developer employment in Australian market by July 2025

**Repository Status**: 
- ✅ Professional CI/CD workflow operational
- ✅ Claude Code review integration active  
- ✅ Quality gates and automated validation functional
- 🟡 Week 1 implementation in progress
- ⏳ 23 weeks remaining to career readiness
- Never change my code, just provide the suggestion. Let me implement by myself.