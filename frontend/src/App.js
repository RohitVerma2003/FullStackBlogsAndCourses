import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Courses from './Pages/Courses';
import BlogDetail from './Pages/BlogDetail';
import CourseDetails from './Pages/CourseDetails';
import Purchase from './Pages/Purchase';
import Admin from './Pages/Admin';
import AddBlog from './Components/AddBlog';
import ScheduledBlog from './Pages/ScheduledBlog';
import { Toaster } from 'react-hot-toast';
import MailVerify from './Pages/MailVerify';
import OtpVerify from './Pages/OtpVerify';

function App() {
  return (
    <div className="App">
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={<Blogs />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/blogDetail' element={<BlogDetail />} />
          <Route path='/courseDetail' element={<CourseDetails />} />
          <Route path='/purchase/:courseId' element={<Purchase />} />
          <Route path='/mailVerify/:courseId' element={<MailVerify />} />
          <Route path='/optVerify/:email/:courseId' element={<OtpVerify />} />
        </Route>
        <Route path='/admin' element={<Admin />} >
          <Route path='/admin' element={<AddBlog/>}/>
          <Route path='/admin/scheduled' element={<ScheduledBlog/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
