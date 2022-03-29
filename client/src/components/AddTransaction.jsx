import React, { useState, useContext } from 'react' // Importuoju react 
import { GlobalContext } from '../context/GlobalState'; // GlobalContext skirtas dalytis duomenimis, kurie gali būti laikomi globaliai „React“ komponentų medyje.
import { incomeCategories, expenseCategories } from "../utilities/categories"; // 

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Sąskaitos');
    const [formData, setFormData] = useState('Pajamos');   

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000), // sugeneruoja suapvalintą random id
            formData,
            category,
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText(''); // nuresetina 
        setFormData(''); // nuresetina 
        setCategory('Sąskaitos'); // nuresetina 
        setAmount('Pajamos'); // nuresetina 
    }

    const selectedCategories = formData === 'Pajamos' ? incomeCategories : expenseCategories; // renkasi kategorija, pagal inputo formatą

  return (
    <div className="transactions">
        <h3>Pridėti naują transakcija</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Tekstas</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Įveskite tekstą..." /> {/* užsetiną tekstą */}
            </div>
            <div>
                <select className="pajamos_islaidos" value={formData} onChange={(e) => setFormData( e.target.value )}>    {/* užsetina pasirinkimą */}
                    <option value='Pajamos'>Pajamos</option>
                    <option value='Išlaidos'>Išlaidos</option>    
                </select>
            </div>
            <div>
                <select className="kategorijos" value={formData.category} onChange={(e) => setCategory(e.target.value)}>  { /* užsetina kategoriją */}
                    {selectedCategories.map((c) => <option key={c.type} value={c.type}>{c.type}</option>)}  {/* map'ina kategorijas is categories.js failo */}
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Suma 
                    <br />
                    Neigiama - <span className="minus">išlaidos</span>. <br/> Teigiama - <span className="plus">pajamos</span>.
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Įveskite sumą..." />
            </div>
            <button className="btn">Pridėti transakcija</button>
        </form> 
    </div>
  )
}
