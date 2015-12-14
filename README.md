# Scribe

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Scribe is a web application inspired by Evernote built using Ruby on Rails
and React.js. Scribe allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] New User (account creation)
- [ ] New Session (Log in / Log out)
- [ ] CRUD operations on notes
- [ ] Organize notes within Notebooks
- [ ] Tag notes with multiple tags and search notes by tag
- [ ] Search through notes for blocks of text
- [ ] Allow users to style notes
- [ ] Allow users to optionally set a reminder on a note  

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Note Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). This will follow the same pattern learned during the Rails curriculum
at App Academy. The splash page will contain the sigin/signout links along
with a brief description of the site. A guest login option will be available
for demo purposes. After session creation the user will hit the landing page
which will contain the root React component. The end of phase 1 will consist
of constructing a JSON api for transmitting note data.

[Details][phase-one]

### Phase 2: Flux Architecture and Note CRUD (2.5 days)

Phase 2 will consist of building flux architectural pieces, the React router,
and necessary React components. After this foundational pieces are implemented,
a Note Store will be built such that basic CRUD operations are functional on Notes.
Next up, React views for the Notes `Index`, `IndexItem` and `Form` will be built.
The conclusion of phase 2 should result in CRUD functionality in the browser for
Notes. At this point, basic styling using Bootstrap will begin.

[Details][phase-two]

### Phase 3: Notebooks and Tags (2 days)

Phase 3 will consist of structuring relationships using associations along
with flushing out the JSON api. Allowing users to tag notes will be implemented
here. Searching for notes by tag will be built here. A possible fuzzy search
(searching through all notes content) will be constructed.

[Details][phase-three]

### Phase 4: Allow Complex Styling in Notes (1 day)

Users will be allowed to style their notes using the common features
found in all common text-editors. This will be built using the react-quill
library.

[Details][phase-four]

### Phase 5: Reminders and Garbage Collection (1 day)

Allow users to set reminders on notes will be built here.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

The focurs of this phase will be heavy styling using Bootstrap to make
the site feel more interactive.

<!-- ### Bonus Features (TBD)
- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Changelogs for Notes
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Multiple sessions -->

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
