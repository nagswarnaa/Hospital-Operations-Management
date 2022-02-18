import { collection, query, orderBy, onSnapshot, getDocs } from "firebase/firestore"
import { db } from '../utils/config'

const patients = [{
  Patient_id: 1,
  Patient_name: "Ediva Shirrell",
  Address: "Los Angeles",
  Dob: "8/18/2020",
  Phone: "818-145-3280",
  Sex: "Female",
  DOJ: "12/4/2021"
}, {
  Patient_id: 2,
  Patient_name: "Jolynn Learmont",
  Address: "Helsingborg",
  Dob: "1/28/2019",
  Phone: "968-139-0120",
  Sex: "Male",
  DOJ: "8/31/2021"
}, {
  Patient_id: 3,
  Patient_name: "Sawyere Hatry",
  Address: "Sundawenang",
  Dob: "7/2/2018",
  Phone: "198-313-4277",
  Sex: "Male",
  DOJ: "12/5/2021"
}, {
  Patient_id: 4,
  Patient_name: "Harlen Riba",
  Address: "Phu Kam Yao",
  Dob: "2/14/2020",
  Phone: "370-573-8689",
  Sex: "Male",
  DOJ: "8/18/2021"
}, {
  Patient_id: 5,
  Patient_name: "Jesselyn Harry",
  Address: "Bosen",
  Dob: "8/31/2018",
  Phone: "331-221-5788",
  Sex: "Female",
  DOJ: "10/24/2021"
}, {
  Patient_id: 6,
  Patient_name: "Kinna Price",
  Address: "Acharnés",
  Dob: "4/12/2018",
  Phone: "749-962-2156",
  Sex: "Male",
  DOJ: "6/12/2021"
}, {
  Patient_id: 7,
  Patient_name: "Trudie Fishly",
  Address: "Fenlu",
  Dob: "8/14/2019",
  Phone: "426-587-5898",
  Sex: "Male",
  DOJ: "7/1/2021"
}, {
  Patient_id: 8,
  Patient_name: "Marie Sloam",
  Address: "Sunne",
  Dob: "10/9/2018",
  Phone: "458-457-5047",
  Sex: "Female",
  DOJ: "3/12/2021"
}, {
  Patient_id: 9,
  Patient_name: "Rafaela De la croix",
  Address: "Luče",
  Dob: "7/7/2017",
  Phone: "494-743-1634",
  Sex: "Female",
  DOJ: "9/20/2021"
}, {
  Patient_id: 10,
  Patient_name: "Star Grishaev",
  Address: "Villeta",
  Dob: "12/5/2020",
  Phone: "181-240-2585",
  Sex: "Female",
  DOJ: "10/6/2021"
}, {
  Patient_id: 11,
  Patient_name: "Munmro Masson",
  Address: "Kuty",
  Dob: "7/2/2019",
  Phone: "859-456-7927",
  Sex: "Male",
  DOJ: "12/21/2021"
}, {
  Patient_id: 12,
  Patient_name: "Gerri Jocelyn",
  Address: "Daykitin",
  Dob: "12/29/2019",
  Phone: "463-198-1120",
  Sex: "Female",
  DOJ: "7/29/2021"
}, {
  Patient_id: 13,
  Patient_name: "Efren Demangeon",
  Address: "Panagyurishte",
  Dob: "12/21/2021",
  Phone: "812-521-8870",
  Sex: "Genderfluid",
  DOJ: "4/4/2021"
}, {
  Patient_id: 14,
  Patient_name: "Ignatius Muffett",
  Address: "Cadiz",
  Dob: "6/4/2020",
  Phone: "306-693-2792",
  Sex: "Female",
  DOJ: "4/7/2021"
}, {
  Patient_id: 15,
  Patient_name: "Prissie Cufflin",
  Address: "Mayantoc",
  Dob: "5/21/2021",
  Phone: "964-671-6831",
  Sex: "Female",
  DOJ: "11/7/2021"
}, {
  Patient_id: 16,
  Patient_name: "Dun Ryding",
  Address: "Mojoroto",
  Dob: "12/27/2019",
  Phone: "688-579-5968",
  Sex: "Female",
  DOJ: "6/6/2021"
}, {
  Patient_id: 17,
  Patient_name: "Briant Throssell",
  Address: "Uruguaiana",
  Dob: "6/8/2021",
  Phone: "962-760-5184",
  Sex: "Female",
  DOJ: "5/22/2021"
}, {
  Patient_id: 18,
  Patient_name: "Saunder McCree",
  Address: "Tagum",
  Dob: "4/5/2021",
  Phone: "406-578-0257",
  Sex: "Female",
  DOJ: "11/27/2021"
}, {
  Patient_id: 19,
  Patient_name: "Finley Cornewell",
  Address: "Cincinnati",
  Dob: "2/26/2021",
  Phone: "513-517-1871",
  Sex: "Male",
  DOJ: "5/7/2021"
}, {
  Patient_id: 20,
  Patient_name: "Catina Patten",
  Address: "Zhonghechang",
  Dob: "5/3/2020",
  Phone: "737-370-9317",
  Sex: "Female",
  DOJ: "9/24/2021"
}]

const medicines =
  [{ Prescription_ref: 1, Date: "7/27/2021", Patient_name: "Ediva Shirrell", Doctor_Name: "Kassie Burrells", Medication: "Visipaque", Quantity: 3 },
  { Prescription_ref: 1, Date: "1/1/2022", Patient_name: "Ediva Shirrell", Doctor_Name: "Van Sheaber", Medication: "Lisinopril", Quantity: 4 },
  { Prescription_ref: 1, Date: "9/14/2021", Patient_name: "Ediva Shirrell", Doctor_Name: "Christalle Kerwick", Medication: "Berberis e fruct. ", Quantity: 10 },
  { Prescription_ref: 4, Date: "11/28/2021", Patient_name: "Ediva Shirrell", Doctor_Name: "Nessy Eckery", Medication: " Antiseptic Hand CLEANSING", Quantity: 8 },
  { Prescription_ref: 5, Date: "9/29/2021", Patient_name: "Mignon Goshawke", Doctor_Name: "Kent Londsdale", Medication: "Hepar Magnesium ", Quantity: 3 },
  { Prescription_ref: 6, Date: "8/22/2021", Patient_name: "Jolynn Learmont", Doctor_Name: "Saunder Brigg", Medication: "Spironolactone", Quantity: 1 },
  { Prescription_ref: 2, Date: "12/17/2021", Patient_name: "Lucita Beteriss", Doctor_Name: "Cherlyn Beardmore", Medication: "acyclovir", Quantity: 5 },
  { Prescription_ref: 8, Date: "6/20/2021", Patient_name: "Brittany Shepley", Doctor_Name: "Shelagh Hallowell", Medication: "Methocarbamol", Quantity: 7 },
  { Prescription_ref: 9, Date: "3/20/2021", Patient_name: "Katharyn Tinkler", Doctor_Name: "Kane Learman", Medication: " Skin Anti Wrinkle", Quantity: 3 },
  { Prescription_ref: 10, Date: "4/13/2021", Patient_name: "Giuseppe Dingle", Doctor_Name: "Axel Lynes", Medication: "ANTIBACTERIAL FOAMING", Quantity: 7 },
  { Prescription_ref: 11, Date: "4/25/2021", Patient_name: "Barrie Meale", Doctor_Name: "Angeli Hallihan", Medication: "Neostigmine Methylsulfate", Quantity: 3 },
  { Prescription_ref: 12, Date: "5/21/2021", Patient_name: "Linnet Humphris", Doctor_Name: "Julienne Trank", Medication: "SAFEWAY CARE", Quantity: 10 },
  { Prescription_ref: 13, Date: "10/25/2021", Patient_name: "Ode Conelly", Doctor_Name: "Skippy MacPhail", Medication: "Antigas", Quantity: 1 },
  { Prescription_ref: 14, Date: "11/29/2021", Patient_name: "Sholom Poley", Doctor_Name: "Web Routledge", Medication: "heartburn relief", Quantity: 4 },
  { Prescription_ref: 15, Date: "12/21/2021", Patient_name: "Garreth Doddemeade", Doctor_Name: "Sansone Naton", Medication: "Biofreeze Colorless Roll-On", Quantity: 2 },
  { Prescription_ref: 16, Date: "2/11/2021", Patient_name: "L;urette Leete", Doctor_Name: "Hewitt Dwyr", Medication: " wrinkle moisturizer", Quantity: 9 },
  { Prescription_ref: 17, Date: "10/22/2021", Patient_name: "Gwenni Billin", Doctor_Name: "Rafael Ilchenko", Medication: "PRINIVIL", Quantity: 1 },
  { Prescription_ref: 18, Date: "7/25/2021", Patient_name: "Burgess Dimitriou", Doctor_Name: "Bel Cohalan", Medication: "Hydralazine Hydrochloride", Quantity: 1 },
  { Prescription_ref: 19, Date: "2/19/2021", Patient_name: "Huberto McFarlane", Doctor_Name: "Julie Tomsa", Medication: "Sulindac", Quantity: 6 },
  { Prescription_ref: 20, Date: "1/6/2022", Patient_name: "Clemmy Rodell", Doctor_Name: "Yurik Ramstead", Medication: "DermaCen Protectant", Quantity: 9 },
  { Prescription_ref: 21, Date: "7/3/2021", Patient_name: "Tedra Hebble", Doctor_Name: "Jo-anne Humble", Medication: " Foam Hand Wash", Quantity: 2 },
  { Prescription_ref: 22, Date: "5/8/2021", Patient_name: "Matthew Huckel", Doctor_Name: "Frieda Misk", Medication: "TIAZAC", Quantity: 6 },
  { Prescription_ref: 23, Date: "4/7/2021", Patient_name: "Alyss Local", Doctor_Name: "Omar Sidwick", Medication: "BestHealth Honey Lemon", Quantity: 4 },
  { Prescription_ref: 24, Date: "2/2/2021", Patient_name: "Rollins Cohan", Doctor_Name: "Micaela Leynham", Medication: "Amoxicillin", Quantity: 1 },
  { Prescription_ref: 25, Date: "12/31/2021", Patient_name: "Bev O'Mullaney", Doctor_Name: "Valerie Trippick", Medication: "Levofloxacin", Quantity: 6 },
  { Prescription_ref: 26, Date: "1/10/2022", Patient_name: "Pandora Scorton", Doctor_Name: "Richart Carreck", Medication: "ESIKA", Quantity: 1 },
  { Prescription_ref: 27, Date: "4/30/2021", Patient_name: "Danyette Grigaut", Doctor_Name: "Catrina Selly", Medication: "Sominex Max", Quantity: 3 },
  { Prescription_ref: 28, Date: "4/11/2021", Patient_name: "Ethelind Hoffmann", Doctor_Name: "Daffy Thickett", Medication: "amiodarone hydrochloride", Quantity: 4 },
  { Prescription_ref: 29, Date: "11/29/2021", Patient_name: "Carmen Izkovitz", Doctor_Name: "Arri Haslehurst", Medication: "Tussin Sugar Free", Quantity: 3 },
  { Prescription_ref: 30, Date: "4/3/2021", Patient_name: "Fredi Bercher", Doctor_Name: "Tabby Antonik", Medication: "Anti Blemish Body Wash", Quantity: 10 },
  { Prescription_ref: 31, Date: "1/8/2022", Patient_name: "Aubree Worlidge", Doctor_Name: "Dotty Farrent", Medication: "Buspirone Hydrochloride", Quantity: 5 },
  { Prescription_ref: 32, Date: "3/11/2021", Patient_name: "Randene Kinnen", Doctor_Name: "Aleda Grabban", Medication: "Hand Sanitizer", Quantity: 3 },
  { Prescription_ref: 33, Date: "7/2/2021", Patient_name: "Melodee Bickers", Doctor_Name: "Dido Valentinuzzi", Medication: "Meloxicam", Quantity: 5 },
  { Prescription_ref: 34, Date: "2/16/2021", Patient_name: "Noel Ellingsworth", Doctor_Name: "Willamina Mettetal", Medication: " powder spf 15", Quantity: 8 },
  { Prescription_ref: 35, Date: "11/25/2021", Patient_name: "Thorstein Clooney", Doctor_Name: "Beilul Van Hove", Medication: "Trihexyphenidyl Hydrochloride", Quantity: 6 },
  { Prescription_ref: 36, Date: "3/4/2021", Patient_name: "Kippy Creeboe", Doctor_Name: "Mariette Crellin", Medication: "Promethazine Hydrochloride", Quantity: 10 },
  { Prescription_ref: 37, Date: "11/3/2021", Patient_name: "Rene Gasker", Doctor_Name: "Garland Waddoups", Medication: "Naloxone Hydrochloride", Quantity: 2 },
  { Prescription_ref: 38, Date: "5/29/2021", Patient_name: "Rafferty Carlick", Doctor_Name: "Catina Litton", Medication: "BOTOX", Quantity: 7 },
  { Prescription_ref: 39, Date: "5/16/2021", Patient_name: "Gan Gedling", Doctor_Name: "Ellyn Sigars", Medication: "Hand Sanitizer", Quantity: 8 },
  { Prescription_ref: 40, Date: "1/16/2022", Patient_name: "Lanna Virgoe", Doctor_Name: "Zolly Coverlyn", Medication: "VYTORIN", Quantity: 4 },
  { Prescription_ref: 41, Date: "12/7/2021", Patient_name: "Dunc Reuben", Doctor_Name: "Allie Trevorrow", Medication: "MEDIQUE I-PRIN", Quantity: 5 },
  { Prescription_ref: 42, Date: "6/20/2021", Patient_name: "Myra Yakushkev", Doctor_Name: "Irena Ridgeway", Medication: "Dronabinol", Quantity: 2 },
  { Prescription_ref: 43, Date: "11/29/2021", Patient_name: "Alene Cunnington", Doctor_Name: "Gill Karp", Medication: "Hydroxyzine Hydrochloride", Quantity: 8 },
  { Prescription_ref: 44, Date: "3/4/2021", Patient_name: "Shauna Charpling", Doctor_Name: "Trudi Brothers", Medication: "Secura Personal Cleanser", Quantity: 7 },
  { Prescription_ref: 45, Date: "8/25/2021", Patient_name: "Guthrey Keohane", Doctor_Name: "Pepe Corroyer", Medication: "Metformin Hydrochloride", Quantity: 5 },
  { Prescription_ref: 46, Date: "7/5/2021", Patient_name: "Mac McNeilly", Doctor_Name: "Yorgo Jentzsch", Medication: " pain relief", Quantity: 2 },
  { Prescription_ref: 47, Date: "1/24/2022", Patient_name: "Catie Breeds", Doctor_Name: "Olivero Hutchinges", Medication: "Bryophyllum e fol. 5%", Quantity: 6 },
  { Prescription_ref: 48, Date: "6/26/2021", Patient_name: "Zedekiah Moreing", Doctor_Name: "Brittany Danks", Medication: "AVANDIA", Quantity: 7 },
  { Prescription_ref: 49, Date: "7/31/2021", Patient_name: "Nicola Melmeth", Doctor_Name: "Tilda Ruffles", Medication: "Zolpidem Tartrate", Quantity: 6 },
  { Prescription_ref: 50, Date: "9/20/2021", Patient_name: "Ashia Jerrold", Doctor_Name: "Arvie Spollen", Medication: "OxyContin", Quantity: 4 },
  { Prescription_ref: 51, Date: "5/19/2021", Patient_name: "Lionel Kastel", Doctor_Name: "Pooh Turbayne", Medication: " Anti-Wrinkle", Quantity: 5 },
  { Prescription_ref: 52, Date: "9/26/2021", Patient_name: "Bo Gore", Doctor_Name: "Terrijo Jantzen", Medication: "Mederma for Kids", Quantity: 2 },
  { Prescription_ref: 53, Date: "5/3/2021", Patient_name: "Field Brotheridge", Doctor_Name: "Allix Largen", Medication: " All over Sunscreen", Quantity: 5 },
  { Prescription_ref: 54, Date: "6/7/2021", Patient_name: "Julian Praton", Doctor_Name: "Addie Mudle", Medication: "Rohto Hydra", Quantity: 3 },
  { Prescription_ref: 55, Date: "5/9/2021", Patient_name: "Angel Wiggall", Doctor_Name: "Amye Leber", Medication: "Meijer SPF 30", Quantity: 1 },
  { Prescription_ref: 56, Date: "3/3/2021", Patient_name: "Nerte Isoldi", Doctor_Name: "Magdalen Thomson", Medication: "Blue Ice Analgesic", Quantity: 3 },
  { Prescription_ref: 57, Date: "9/2/2021", Patient_name: "Virginie Cansdall", Doctor_Name: "Roby Yearnes", Medication: "Witch Hazel", Quantity: 2 },
  { Prescription_ref: 58, Date: "12/28/2021", Patient_name: "Kylie Copcott", Doctor_Name: "Johnna Weavers", Medication: "Antibacterial Hand Soap", Quantity: 1 },
  { Prescription_ref: 59, Date: "11/17/2021", Patient_name: "Alexandre Tantrum", Doctor_Name: "Gabbie Andrzejewski", Medication: "Aconitum Belladonna", Quantity: 3 },
  { Prescription_ref: 60, Date: "1/27/2021", Patient_name: "Maren Pevsner", Doctor_Name: "Alameda Ginity", Medication: "Greasewood", Quantity: 10 },
  { Prescription_ref: 61, Date: "6/15/2021", Patient_name: "Aeriel Palley", Doctor_Name: "Alvina Edinburough", Medication: "NovoLog Mix 70/30", Quantity: 8 },
  { Prescription_ref: 62, Date: "6/5/2021", Patient_name: "Kym Ortiger", Doctor_Name: "Yvor Samwell", Medication: "Tall Ragweed", Quantity: 8 },
  { Prescription_ref: 63, Date: "1/5/2022", Patient_name: "Vin Di Pietro", Doctor_Name: "Constanta Hegerty", Medication: " Pain Relief", Quantity: 1 },
  { Prescription_ref: 64, Date: "4/27/2021", Patient_name: "Ron Woollard", Doctor_Name: "Aubrey Cressar", Medication: " Private Limited", Quantity: 4 },
  { Prescription_ref: 65, Date: "3/8/2021", Patient_name: "Lon McKevin", Doctor_Name: "Jaquelyn Brownsey", Medication: " Ecran Solaire", Quantity: 1 },
  { Prescription_ref: 66, Date: "3/31/2021", Patient_name: "Jillayne Bedberry", Doctor_Name: "Susie Nano", Medication: "Simvastatin", Quantity: 10 },
  { Prescription_ref: 67, Date: "10/3/2021", Patient_name: "Susanne Henken", Doctor_Name: "Gusti Fishbourne", Medication: "  SPF30 021", Quantity: 1 },
  { Prescription_ref: 68, Date: "4/4/2021", Patient_name: "Dael Gomby", Doctor_Name: "Nelie Corssen", Medication: " Benazepril Hydrochloride", Quantity: 2 },
  { Prescription_ref: 69, Date: "9/13/2021", Patient_name: "Thaddeus Wellman", Doctor_Name: "Dionysus Trotter", Medication: "Aminosyn Sulfite Free", Quantity: 5 },
  { Prescription_ref: 70, Date: "10/13/2021", Patient_name: "Othella Fincham", Doctor_Name: "Kip Brevitt", Medication: "NightTime Sinus Relief", Quantity: 2 },
  { Prescription_ref: 71, Date: "6/14/2021", Patient_name: "Bellina Marcone", Doctor_Name: "Verine Langmuir", Medication: "Stomach Relief", Quantity: 7 },
  { Prescription_ref: 72, Date: "1/11/2022", Patient_name: "Gates Quarless", Doctor_Name: "Zackariah Hrishchenko", Medication: " Wrinkle Solution ", Quantity: 6 },
  { Prescription_ref: 73, Date: "12/2/2021", Patient_name: "Kristan McAviy", Doctor_Name: "Augustine Witcher", Medication: "Acyclovir", Quantity: 3 },
  { Prescription_ref: 74, Date: "6/3/2021", Patient_name: "Riva Van der Kruys", Doctor_Name: "Curtice Kempstone", Medication: "PLATANUS OCCIDENTALIS POLLEN", Quantity: 3 },
  { Prescription_ref: 75, Date: "12/15/2021", Patient_name: "Hube Cocklin", Doctor_Name: "Jillana Bridges", Medication: " Oral Pain Reliever", Quantity: 9 },
  { Prescription_ref: 76, Date: "12/7/2021", Patient_name: "Axel Alfonsini", Doctor_Name: "Karlotte Shann", Medication: "Lisinopril", Quantity: 2 },
  { Prescription_ref: 77, Date: "12/6/2021", Patient_name: "Edithe Balme", Doctor_Name: "Eadith Tolle", Medication: "RANITIDINE", Quantity: 9 },
  { Prescription_ref: 78, Date: "12/3/2021", Patient_name: "Rubi Stood", Doctor_Name: "Humbert Lightning", Medication: "ABILIFY", Quantity: 2 },
  { Prescription_ref: 79, Date: "6/30/2021", Patient_name: "Erik Lening", Doctor_Name: "Andrea Bruckenthal", Medication: "HurriCaine", Quantity: 4 },
  { Prescription_ref: 80, Date: "10/10/2021", Patient_name: "Simone Brittan", Doctor_Name: "Laverna Doby", Medication: "Amoxicillin", Quantity: 7 },
  { Prescription_ref: 81, Date: "1/17/2022", Patient_name: "Alisha Fullun", Doctor_Name: "Annabela Barbisch", Medication: "Modafinil", Quantity: 8 },
  { Prescription_ref: 82, Date: "7/4/2021", Patient_name: "Benson Swanson", Doctor_Name: "Richmond Segot", Medication: "Hydrochlorothiazide", Quantity: 4 },
  { Prescription_ref: 83, Date: "4/25/2021", Patient_name: "Fredra Boards", Doctor_Name: "Bernadene Mandry", Medication: "Diphenhydramine HCl", Quantity: 1 },
  { Prescription_ref: 84, Date: "4/8/2021", Patient_name: "Niall Kleinert", Doctor_Name: "Leticia Ughetti", Medication: "California Black Walnut", Quantity: 3 },
  { Prescription_ref: 85, Date: "9/2/2021", Patient_name: "Hanna Dransfield", Doctor_Name: "Stevena Josh", Medication: "Quetiapine fumarate", Quantity: 2 },
  { Prescription_ref: 86, Date: "10/1/2021", Patient_name: "Felizio Normanton", Doctor_Name: "Shanan Ollis", Medication: "Aspi-Rub", Quantity: 4 },
  { Prescription_ref: 87, Date: "10/7/2021", Patient_name: "Marybeth Fortye", Doctor_Name: "Mick Liverock", Medication: "Lyrica", Quantity: 5 },
  { Prescription_ref: 88, Date: "3/5/2021", Patient_name: "Gloria Lilleman", Doctor_Name: "Luciano Allonby", Medication: "Nystatin", Quantity: 2 },
  { Prescription_ref: 89, Date: "11/13/2021", Patient_name: "Tallie Pizey", Doctor_Name: "Fayth Mitrikhin", Medication: "Bupropion Hydrochloride", Quantity: 4 },
  { Prescription_ref: 90, Date: "10/1/2021", Patient_name: "Alice Nelius", Doctor_Name: "Alexandr Dislee", Medication: "Jevtana", Quantity: 7 },
  { Prescription_ref: 91, Date: "11/11/2021", Patient_name: "Tabbatha Fearnyhough", Doctor_Name: "Mikey Bockmann", Medication: "Atenolol", Quantity: 10 },
  { Prescription_ref: 92, Date: "12/7/2021", Patient_name: "Montague Kinavan", Doctor_Name: "Bern Dykas", Medication: "Fluvoxamine Maleate", Quantity: 10 },
  { Prescription_ref: 93, Date: "10/6/2021", Patient_name: "Meade Coche", Doctor_Name: "Shaun Boteman", Medication: "Lidocaine", Quantity: 9 },
  { Prescription_ref: 94, Date: "5/30/2021", Patient_name: "Elaina Mullan", Doctor_Name: "Dave Tarquinio", Medication: "Tobramycin", Quantity: 7 },
  { Prescription_ref: 95, Date: "11/24/2021", Patient_name: "Deni Orchart", Doctor_Name: "Burg Measham", Medication: "Nicotrol (Professional Sample)", Quantity: 1 },
  { Prescription_ref: 96, Date: "2/1/2021", Patient_name: "Cathrine Mc Mechan", Doctor_Name: "Mary Pearl", Medication: "Daytime Cough And Cold", Quantity: 8 },
  { Prescription_ref: 97, Date: "1/4/2022", Patient_name: "Sauveur Kettles", Doctor_Name: "Yolande Junkinson", Medication: "citroma", Quantity: 8 },
  { Prescription_ref: 98, Date: "7/9/2021", Patient_name: "Morly Inchboard", Doctor_Name: "Doroteya Amey", Medication: "7 Select Allergy", Quantity: 1 },
  { Prescription_ref: 99, Date: "4/21/2021", Patient_name: "Irena Picopp", Doctor_Name: "Kimberley Machon", Medication: "Tangerine", Quantity: 3 },
  { Prescription_ref: 100, Date: "7/22/2021", Patient_name: "Koren Henze", Doctor_Name: "Samara Lowy", Medication: "Isopropyl Alcohol", Quantity: 8 }

  ];



async function fire_getPatients(db) {
  const patientsCol = collection(db, 'patients');


  const PatientsSnapshot = await getDocs(patientsCol);


  const PatientsList = PatientsSnapshot.docs.map(doc => doc.data());

  console.log("PatientsList", PatientsList);
  return PatientsList;

}

export async function getPatients() {
  let data = await fire_getPatients(db);
  // let data = [];
  // const q = query(collection(db, 'patients'), orderBy('dob', 'desc'))
  // onSnapshot(q, (querySnapshot) => {
  //   data = querySnapshot.docs.map(doc => doc.data()
  //   )
  //})

  console.log("data", data);
  return data;
}

export function getMedicines() {
  return medicines;
}

export function getMedicine(Prescription_ref) {
  return medicines.find(m => m.Prescription_ref === Prescription_ref);
}

export function saveMedicine(Medicine) {
  let MedicineInDb = medicines.find(m => m.Prescription_ref === Medicine.Prescription_ref) || {};
  MedicineInDb.Patient_name = Medicine.Patient_name;
  MedicineInDb.Doctor_Name = Medicine.Doctor_Name;
  MedicineInDb.Medication = Medicine.Medication;
  MedicineInDb.Quantity = Medicine.Quantity;

  if (!MedicineInDb.Prescription_ref) {
    MedicineInDb.Prescription_ref = Date.now();
    medicines.push(MedicineInDb);
  }

  return MedicineInDb;
}

export function deleteMedicine(Prescription_ref) {
  let MedicineInDb = medicines.find(m => m.Prescription_ref === Prescription_ref);
  medicines.splice(medicines.indexOf(MedicineInDb), 1);
  return MedicineInDb;
}
