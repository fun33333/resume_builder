import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ResumeData } from '../types/resume';

const styles = StyleSheet.create({
  page: { padding: 20, fontSize: 12 },
  section: { marginBottom: 10 },
  title: { fontSize: 20, marginBottom: 10, color: '#283618' },
  subTitle: { fontSize: 16, marginBottom: 5, color: '#283618' },
  text: { marginBottom: 5 },
  listItem: { marginLeft: 10, marginBottom: 2 },
});

interface ResumePDFProps {
  resumeData: ResumeData;
}

const ResumePDF: React.FC<ResumePDFProps> = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{resumeData.name || 'NAME'}</Text>
        <Text style={styles.subTitle}>{resumeData.jobTitle}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Personal Details</Text>
        <Text style={styles.text}>{resumeData.personalDetail}</Text>
      </View>

      {(resumeData.religion || resumeData.nationality || resumeData.cnic || resumeData.birth || resumeData.status || resumeData.languages || resumeData.passport) && (
        <View style={styles.section}>
          <Text style={styles.subTitle}>Personal Information</Text>
          {resumeData.religion && <Text style={styles.listItem}>Religion: {resumeData.religion}</Text>}
          {resumeData.nationality && <Text style={styles.listItem}>Nationality: {resumeData.nationality}</Text>}
          {resumeData.cnic && <Text style={styles.listItem}>CNIC: {resumeData.cnic}</Text>}
          {resumeData.status && <Text style={styles.listItem}>Marital Status: {resumeData.status}</Text>}
          {resumeData.birth && <Text style={styles.listItem}>Date of Birth: {resumeData.birth}</Text>}
          {resumeData.languages && <Text style={styles.listItem}>Languages: {resumeData.languages}</Text>}
          {resumeData.passport && <Text style={styles.listItem}>Passport No: {resumeData.passport}</Text>}
        </View>
      )}

      {(resumeData.phone || resumeData.email || resumeData.address || resumeData.linkedin) && (
        <View style={styles.section}>
          <Text style={styles.subTitle}>Contact</Text>
          {resumeData.phone && <Text style={styles.listItem}>Phone: {resumeData.phone}</Text>}
          {resumeData.email && <Text style={styles.listItem}>Email: {resumeData.email}</Text>}
          {resumeData.address && <Text style={styles.listItem}>Address: {resumeData.address}</Text>}
          {resumeData.linkedin && <Text style={styles.listItem}>LinkedIn: {resumeData.linkedin}</Text>}
        </View>
      )}

      {resumeData.skills.length > 0 && resumeData.skills[0] && (
        <View style={styles.section}>
          <Text style={styles.subTitle}>Skills</Text>
          {resumeData.skills.map((skill, index) => (
            <Text key={index} style={styles.listItem}>{skill}</Text>
          ))}
        </View>
      )}

      {resumeData.education.length > 0 && resumeData.education[0] && (
        <View style={styles.section}>
          <Text style={styles.subTitle}>Education</Text>
          {resumeData.education.reduce((acc: React.ReactElement[], _, index, arr) => {
            if (index % 3 === 0) {
              const degree = arr[index] || '';
              const place = arr[index + 1] || '';
              const year = arr[index + 2] || '';
              acc.push(
                <View key={index} style={styles.listItem}>
                  <Text>{degree} - {place} ({year})</Text>
                </View>
              );
            }
            return acc;
          }, [])}
        </View>
      )}

      {resumeData.experience.length > 0 && resumeData.experience[0] && (
        <View style={styles.section}>
          <Text style={styles.subTitle}>Work Experience</Text>
          {resumeData.experience.reduce((acc: React.ReactElement[], _, index, arr) => {
            if (index % 3 === 0) {
              const post = arr[index] || '';
              const company = arr[index + 1] || '';
              const year = arr[index + 2] || '';
              acc.push(
                <View key={index} style={styles.listItem}>
                  <Text>{post} - {company} ({year})</Text>
                </View>
              );
            }
            return acc;
          }, [])}
        </View>
      )}

      {resumeData.certificate.length > 0 && resumeData.certificate[0] && (
        <View style={styles.section}>
          <Text style={styles.subTitle}>Certifications</Text>
          {resumeData.certificate.reduce((acc: React.ReactElement[], _, index, arr) => {
            if (index % 3 === 0) {
              const course = arr[index] || '';
              const academy = arr[index + 1] || '';
              const year = arr[index + 2] || '';
              acc.push(
                <View key={index} style={styles.listItem}>
                  <Text>{course} - {academy} ({year})</Text>
                </View>
              );
            }
            return acc;
          }, [])}
        </View>
      )}
    </Page>
  </Document>
);

export default ResumePDF;