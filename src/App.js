import React from 'react';
import './App.css';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

// Define the content functions first
const GoalsContent = () => (
  <>
    <li className="item">
      <input type="checkbox" className="item-checkbox" /> <strong>Short-term Goals:</strong>
      <ul className="item-list">
        <li className="item">
          <input type="checkbox" className="item-checkbox" /> Goal 1: Familarize with Git, Github and Figma
        </li>
        <li className="item">
          <input type="checkbox" className="item-checkbox" /> Goal 2: Exploring tech stacks
        </li>
      </ul>
    </li>
    <li className="item">
      <input type="checkbox" className="item-checkbox" /> <strong>Objectives:</strong>
      <ul className="item-list">
        <li className="item">
          <input type="checkbox" className="item-checkbox" /> Goal 1: Research in a particular domain
        </li>
        <li className="item">
          <input type="checkbox" className="item-checkbox" /> Goal 2: Create a project in a particular domain
        </li>
      </ul>
    </li>
  </>
);

const MeetingsContent = () => (
  <>
    <li className="item">
      <strong>Upcoming Meetings:</strong>
      <ul className="item-list">
        <li className="item">Date & Time - Agenda: Description</li>
        <li className="item">Date & Time - Agenda: Description</li>
      </ul>
    </li>
    <li className="item">
      <strong>Past Meetings:</strong>
      <ul className="item-list">
        <li className="item">Date & Time - Summary/Notes</li>
        <li className="item">Date & Time - Summary/Notes</li>
      </ul>
    </li>
  </>
);

const TasksContent = () => (
  <>
    <li className="item">
      <strong>Pending Tasks:</strong>
      <ul className="item-list">
        <li className="item">
          <input type="checkbox" className="item-checkbox" /> Task 1 - Due Date: Assigned To
        </li>
        <li className="item">
          <input type="checkbox" className="item-checkbox" /> Task 2 - Due Date: Assigned To
        </li>
      </ul>
    </li>
    <li className="item">
      <strong>Completed Tasks:</strong>
      <ul className="item-list">
        <li className="item">
          <input type="checkbox" className="item-checkbox" checked readOnly /> Task 1 - Completion Date
        </li>
        <li className="item">
          <input type="checkbox" className="item-checkbox" checked readOnly /> Task 2 - Completion Date
        </li>
      </ul>
    </li>
  </>
);

const ProgressContent = () => (
  <>
    <li className="item">
      <strong>Key Performance Indicators (KPIs):</strong>
      <ul className="item-list">
        <li className="item">KPI 1 - Current Value: Target Value</li>
        <li className="item">KPI 2 - Current Value: Target Value</li>
      </ul>
    </li>
    <li className="item">
      <strong>Progress Updates:</strong>
      <ul className="item-list">
        <li className="item">Date - Update Summary</li>
        <li className="item">Date - Update Summary</li>
      </ul>
    </li>
  </>
);

const ResourcesContent = () => (
  <>
    <li className="item">
      <strong>Documents:</strong>
      <ul className="item-list">
        <li className="item">
          <a href="#">Document 1</a> - Link/Attachment
        </li>
        <li className="item">
          <a href="#">Document 2</a> - Link/Attachment
        </li>
      </ul>
    </li>
    <li className="item">
      <strong>Learning Materials:</strong>
      <ul className="item-list">
        <li className="item">
          <a href="#">Material 1</a> - Link/Attachment
        </li>
        <li className="item">
          <a href="#">Material 2</a> - Link/Attachment
        </li>
      </ul>
    </li>
  </>
);

const FeedbackContent = () => (
  <>
    <li className="item">
      <strong>Mentee Feedback:</strong>
      <ul className="item-list">
        <li className="item">Date - Feedback Summary</li>
      </ul>
    </li>
    <li className="item">
      <strong>Mentor Feedback:</strong>
      <ul className="item-list">
        <li className="item">Date - Feedback Summary</li>
      </ul>
    </li>
    <li className="item">
      <strong>Self-Reflection:</strong>
      <ul className="item-list">
        <li className="item">Date - Reflection Notes</li>
      </ul>
    </li>
  </>
);

const CommunicationContent = () => (
  <>
    <li className="item">
      <strong>Emails:</strong>
      <ul className="item-list">
        <li className="item">Date - Subject - Summary/Link</li>
        <li className="item">Date - Subject - Summary/Link</li>
      </ul>
    </li>
    <li className="item">
      <strong>Messages:</strong>
      <ul className="item-list">
        <li className="item">Date - Platform - Summary</li>
        <li className="item">Date - Platform - Summary</li>
      </ul>
    </li>
  </>
);

const DevelopmentContent = () => (
  <>
    <li className="item">
      <strong>Skills to Develop:</strong>
      <ul className="item-list">
        <li className="item">Skill 1 - Plan to Develop: Description</li>
        <li className="item">Skill 2 - Plan to Develop: Description</li>
      </ul>
    </li>
    <li className="item">
      <strong>Courses/Workshops:</strong>
      <ul className="item-list">
        <li className="item">
          <a href="#">Course 1</a> - Link - Completion Status
        </li>
        <li className="item">
          <a href="#">Workshop 2</a> - Link - Completion Status
        </li>
      </ul>
    </li>
  </>
);

const NotesContent = () => (
  <>
    <li className="item">
      <strong>General Notes:</strong>
      <ul className="item-list">
        <li className="item">Note 1 - Description</li>
        <li className="item">Note 2 - Description</li>
      </ul>
    </li>
    <li className="item">
      <strong>Ideas for Improvement:</strong>
      <ul className="item-list">
        <li className="item">Idea 1 - Description</li>
        <li className="item">Idea 2 - Description</li>
      </ul>
    </li>
  </>
);

const ContactContent = () => (
  <>
    <li className="item">
      <strong>Mentor Contact:</strong>
      <ul className="item-list">
        <li className="item">Email: mentor@example.com</li>
        <li className="item">Phone: (123) 456-7890</li>
      </ul>
    </li>
    <li className="item">
      <strong>Mentee Contact:</strong>
      <ul className="item-list">
        <li className="item">Email: mentee@example.com</li>
        <li className="item">Phone: (987) 654-3210</li>
      </ul>
    </li>
  </>
);

const sections = [
  { id: 'goals', title: 'Goals and Objectives', content: GoalsContent() },
  { id: 'meetings', title: 'Meeting Schedule', content: MeetingsContent() },
  { id: 'tasks', title: 'Task and Action Items', content: TasksContent() },
  { id: 'progress', title: 'Progress Tracking', content: ProgressContent() },
  { id: 'resources', title: 'Resources and Materials', content: ResourcesContent() },
  { id: 'feedback', title: 'Feedback and Reflection', content: FeedbackContent() },
  { id: 'communication', title: 'Communication Log', content: CommunicationContent() },
  { id: 'development', title: 'Personal Development', content: DevelopmentContent() },
  { id: 'notes', title: 'Notes and Ideas', content: NotesContent() },
  { id: 'contact', title: 'Contact Information', content: ContactContent() },
];

const App = () => {
  return (
    <div className="container">
      <Sidebar sections={sections} />
      <Content sections={sections} />
    </div>
  );
};

const Sidebar = ({ sections }) => {
  return (
    <div className="sidebar">
      <div className="header">Sections</div>
      {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`}>
          {section.title}
        </a>
      ))}
    </div>
  );
};

const Content = ({ sections }) => {
  return (
    <div className="content">
      <div className="header">Brew Bridge Dashboard
      <div className="social-links">
      <a href="https://www.linkedin.com/in/nodebrew" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={30} />
      </a>
    </div>
      </div>

      {sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title} content={section.content} />
      ))}
    </div>
  );
};

const Section = ({ id, title, content }) => {
  return (
    <div className="section" id={id}>
      <div className="section-title">{title}</div>
      <ul className="item-list">
        {content}
      </ul>
    </div>
  );
};

export default App;

