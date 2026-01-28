// Czekaj na załadowanie strony
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== ZMIENNE STANU =====
    let currentStep = 1;
    const totalSteps = 20;
    let customBudgetValue = null;

    // ===== ELEMENTY DOM =====
    const form = document.getElementById('carQuestionnaireForm');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const progress = document.getElementById('progress');
    const currentStepSpan = document.getElementById('currentStep');
    const resultsSection = document.getElementById('resultsSection');
    const carResults = document.getElementById('carResults');
    const startOverBtn = document.getElementById('startOverBtn');
    const priorityList = document.getElementById('priorityList');
    const customBudgetInput = document.getElementById('customBudget');
    const applyBudgetBtn = document.getElementById('applyBudgetBtn');
    const budgetDisplay = document.getElementById('budgetDisplay');

    // ===== INICJALIZACJA =====
    console.log('Aplikacja JAKIEMOTO załadowana!');
    initDragAndDrop();
    updateUI();

    // ===== EVENT LISTENERS =====
    
    // Przycisk Wstecz
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Kliknięto Wstecz');
        if (currentStep > 1) {
            currentStep--;
            updateUI();
        }
    });

    // Przycisk Dalej
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Kliknięto Dalej, aktualny krok:', currentStep);
        goToNextStep();
    });

    // Przycisk Znajdź moje auto (Submit)
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Kliknięto Znajdź moje auto');
        if (validateCurrentStep()) {
            handleSubmit();
        }
    });

    // Przycisk Zacznij od nowa
    startOverBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Zaczynam od nowa');
        startOver();
    });

    // Własny budżet - przycisk
    if (applyBudgetBtn) {
        applyBudgetBtn.addEventListener('click', function(e) {
            e.preventDefault();
            applyCustomBudget();
        });
    }

    // Własny budżet - Enter
    if (customBudgetInput) {
        customBudgetInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyCustomBudget();
            }
        });
    }

    // NIE MA AUTO-PRZEJŚCIA - użytkownik musi kliknąć "Dalej"

    // ===== FUNKCJE =====

    // Przejdź do następnego kroku
    function goToNextStep() {
        if (validateCurrentStep()) {
            if (currentStep < totalSteps) {
                currentStep++;
                updateUI();
            }
        }
    }

    // Aktualizacja interfejsu
    function updateUI() {
        console.log('Aktualizuję UI, krok:', currentStep);
        
        // Pokaż aktualny krok
        document.querySelectorAll('.form-step').forEach(function(step, index) {
            if (index === currentStep - 1) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Aktualizuj pasek postępu
        const progressPercent = (currentStep / totalSteps) * 100;
        progress.style.width = progressPercent + '%';

        // Aktualizuj numer kroku
        currentStepSpan.textContent = currentStep;

        // Aktualizuj przyciski
        prevBtn.disabled = (currentStep === 1);
        
        if (currentStep === totalSteps) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'block';
        } else {
            nextBtn.style.display = 'block';
            submitBtn.style.display = 'none';
        }

        // Przewiń do góry
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

// Walidacja aktualnego kroku
function validateCurrentStep() {
    console.log('Walidacja kroku:', currentStep);
    
    const currentStepEl = document.querySelector('.form-step[data-step="' + currentStep + '"]');
    
    if (!currentStepEl) {
        console.error('Nie znaleziono elementu kroku:', currentStep);
        return false;
    }

    // Kroki z checkboxami (wymagane przynajmniej 1)
    const checkboxSteps = [3, 5, 8, 16];
    if (checkboxSteps.includes(currentStep)) {
        const checkboxName = currentStepEl.querySelector('input[type="checkbox"]').name;
        const checked = currentStepEl.querySelectorAll('input[name="' + checkboxName + '"]:checked');
        if (checked.length === 0) {
            showAlert('Wybierz przynajmniej jedną opcję.');
            return false;
        }
        return true;
    }

    // Krok 19 (marki) - opcjonalne, zawsze OK
    if (currentStep === 19) {
        return true;
    }

    // Krok 20 (priorytety) - zawsze OK
    if (currentStep === 20) {
        return true;
    }

    // Krok 11 (budżet) - można też użyć własnej kwoty
    if (currentStep === 11) {
        const checked = currentStepEl.querySelector('input[name="budget"]:checked');
        if (!checked && !customBudgetValue) {
            showAlert('Wybierz budżet lub wpisz własną kwotę.');
            return false;
        }
        return true;
    }

    // Inne kroki z radio buttons
    const radios = currentStepEl.querySelectorAll('input[type="radio"]');
    if (radios.length > 0) {
        const groupName = radios[0].name;
        const checked = currentStepEl.querySelector('input[name="' + groupName + '"]:checked');
        if (!checked) {
            showAlert('Wybierz jedną z opcji.');
            return false;
        }
    }

    console.log('Walidacja OK');
    return true;
}

        console.log('Walidacja OK');
        return true;
    }

    // Zastosuj własny budżet
    function applyCustomBudget() {
        const value = parseInt(customBudgetInput.value);
        if (value && value >= 10000) {
            customBudgetValue = value;
            // Odznacz wszystkie radio budżetu
            document.querySelectorAll('input[name="budget"]').forEach(function(radio) {
                radio.checked = false;
            });
            showAlert('Budżet ustawiony na ' + value.toLocaleString('pl-PL') + ' zł');
        } else {
            showAlert('Podaj kwotę minimum 10 000 zł');
        }
    }

    // Wyświetl alert
    function showAlert(message) {
        // Usuń istniejący alert
        const existingAlert = document.querySelector('.custom-alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        const alertDiv = document.createElement('div');
        alertDiv.className = 'custom-alert';
        alertDiv.innerHTML = '<div class="alert-content"><p>' + message + '</p><button type="button">OK</button></div>';
        
        document.body.appendChild(alertDiv);

        // Zamknij po kliknięciu przycisku
        alertDiv.querySelector('button').addEventListener('click', function() {
            alertDiv.remove();
        });

        // Zamknij po kliknięciu tła
        alertDiv.addEventListener('click', function(e) {
            if (e.target === alertDiv) {
                alertDiv.remove();
            }
        });
    }

    // Obsługa wysłania formularza
    function handleSubmit() {
        console.log('Przetwarzam formularz...');

        // Zbierz dane
        const budgetRadio = document.querySelector('input[name="budget"]:checked');
        const budgetValue = customBudgetValue || (budgetRadio ? parseInt(budgetRadio.value) : 100000);

        const formData = {
            gender: getRadioValue('gender'),
            age: getRadioValue('age'),
            education: getRadioValue('education'),
            profession: getRadioValue('profession'),
            budget: budgetValue,
            interests: getCheckboxValues('interests'),
            drivingEnv: getRadioValue('drivingEnv'),
            priorities: getPriorityOrder()
        };

        console.log('Dane formularza:', formData);

        // Sprawdź czy carDatabase istnieje
        if (typeof carDatabase === 'undefined') {
            console.error('Błąd: carDatabase nie istnieje! Sprawdź czy plik cars.js jest załadowany.');
            showAlert('Błąd ładowania danych samochodów. Odśwież stronę.');
            return;
        }

        // Generuj rekomendacje
        const recommendations = generateRecommendations(formData);
        console.log('Rekomendacje:', recommendations);
        
        // Wyświetl wyniki
        displayResults(recommendations, budgetValue);
    }

    // Pobierz wartość radio
    function getRadioValue(name) {
        const checked = document.querySelector('input[name="' + name + '"]:checked');
        return checked ? checked.value : null;
    }

    // Pobierz wartości checkboxów
    function getCheckboxValues(name) {
        const checked = document.querySelectorAll('input[name="' + name + '"]:checked');
        return Array.from(checked).map(function(cb) {
            return cb.value;
        });
    }

    // Pobierz kolejność priorytetów
    function getPriorityOrder() {
        if (!priorityList) return [];
        const items = priorityList.querySelectorAll('.priority-item');
        return Array.from(items).map(function(item) {
            return item.dataset.attribute;
        });
    }

    // Generuj rekomendacje
    function generateRecommendations(data) {
        console.log('Generuję rekomendacje dla:', data);

        const scoredCars = carDatabase.map(function(car) {
            let score = 0;
            let matchReasons = [];

            // Punkty za priorytety
            if (data.priorities && data.priorities.length > 0) {
                data.priorities.forEach(function(priority, index) {
                    const weight = (data.priorities.length - index) * 2;
                    const carScore = car.scores[priority] || 0;
                    score += carScore * weight;
                    
                    if (carScore >= 8 && index < 3) {
                        matchReasons.push('Świetne: ' + formatPriority(priority));
                    }
                });
            }

            // Bonus za wiek
            if (data.age && car.suitableFor.ages.includes(data.age)) {
                score += 15;
                matchReasons.push('Idealne dla Twojego wieku');
            }

            // Bonus za środowisko jazdy
            if (data.drivingEnv && car.suitableFor.drivingEnv.includes(data.drivingEnv)) {
                score += 20;
                matchReasons.push('Świetne do jazdy: ' + formatDrivingEnv(data.drivingEnv));
            }

            // Bonus za zainteresowania
            if (data.interests && data.interests.length > 0) {
                const interestMatches = data.interests.filter(function(interest) {
                    return car.suitableFor.interests.includes(interest);
                });
                score += interestMatches.length * 10;
                if (interestMatches.length > 0) {
                    matchReasons.push('Pasuje do Twoich zainteresowań');
                }
            }

            // Bonus za zawód
            if (data.profession && car.suitableFor.professions.includes(data.profession)) {
                score += 15;
            }

            // Obsługa budżetu
            const withinBudget = car.priceMin <= data.budget;
            if (!withinBudget) {
                score -= 30;
            } else if (car.priceMax <= data.budget) {
                score += 10;
                matchReasons.push('Mieści się w budżecie');
            }

            return {
                id: car.id,
                name: car.name,
                brand: car.brand,
                type: car.type,
                priceMin: car.priceMin,
                priceMax: car.priceMax,
                priceRange: car.priceRange,
                image: car.image,
                features: car.features,
                otomotoSearch: car.otomotoSearch,
                totalScore: score,
                matchReasons: matchReasons.slice(0, 3),
                withinBudget: withinBudget
            };
        });

        // Sortuj i zwróć top 6
        scoredCars.sort(function(a, b) {
            return b.totalScore - a.totalScore;
        });

        return scoredCars.slice(0, 6);
    }

    // Formatuj priorytet
    function formatPriority(priority) {
        const formats = {
            'cena': 'Cena',
            'spalanie': 'Spalanie',
            'bezpieczenstwo': 'Bezpieczeństwo',
            'komfort': 'Komfort',
            'osiagi': 'Osiągi',
            'przestrzen': 'Przestronność',
            'wyposazenie': 'Wyposażenie',
            'niezawodnosc': 'Niezawodność',
            'marka': 'Marka'
        };
        return formats[priority] || priority;
    }

    // Formatuj środowisko jazdy
    function formatDrivingEnv(env) {
        const formats = {
            'miasto': 'w mieście',
            'trasa': 'na trasie',
            'mieszane': 'wszędzie',
            'teren': 'w terenie'
        };
        return formats[env] || env;
    }

    // Wyświetl wyniki
    function displayResults(cars, budget) {
        console.log('Wyświetlam wyniki dla', cars.length, 'samochodów');

        // Ukryj formularz, pokaż wyniki
        form.style.display = 'none';
        document.querySelector('.progress-bar').style.display = 'none';
        document.querySelector('.step-indicator').style.display = 'none';
        resultsSection.style.display = 'block';

        // Wyświetl budżet
        if (budgetDisplay) {
            budgetDisplay.textContent = budget.toLocaleString('pl-PL') + ' zł';
        }

        // Sprawdź czy są wyniki
        if (cars.length === 0) {
            carResults.innerHTML = '<div class="no-results"><div class="icon">😔</div><h3>Nie znaleziono samochodów</h3><p>Spróbuj zmienić kryteria wyszukiwania.</p></div>';
            return;
        }

        // Wygeneruj karty samochodów
        const maxScore = cars[0].totalScore;

        let html = '';
        cars.forEach(function(car, index) {
            const matchPercent = maxScore > 0 ? Math.round((car.totalScore / maxScore) * 100) : 50;
            const otomotoUrl = 'https://www.otomoto.pl/osobowe/' + car.otomotoSearch;
            const budgetClass = car.withinBudget ? '' : 'out-of-budget';
            const priceClass = car.withinBudget ? 'within-budget' : 'over-budget';

            html += '<div class="car-card ' + budgetClass + '">';
            html += '<div class="car-image">' + car.image + '</div>';
            html += '<div class="car-info">';
            html += '<span class="match-score">🎯 ' + matchPercent + '% dopasowania</span>';
            html += '<h3>' + car.name + '</h3>';
            html += '<p class="car-type">' + car.type + '</p>';
            html += '<p class="car-price ' + priceClass + '">' + car.priceRange + '</p>';
            
            if (!car.withinBudget) {
                html += '<p class="budget-warning">⚠️ Powyżej budżetu</p>';
            }
            
            html += '<div class="car-features">';
            car.features.forEach(function(feature) {
                html += '<span>' + feature + '</span>';
            });
            html += '</div>';
            
            if (car.matchReasons && car.matchReasons.length > 0) {
                html += '<div class="match-reasons"><ul>';
                car.matchReasons.forEach(function(reason) {
                    html += '<li>' + reason + '</li>';
                });
                html += '</ul></div>';
            }
            
            html += '<a href="' + otomotoUrl + '" target="_blank" rel="noopener" class="car-link">🔍 Zobacz na OTOMOTO</a>';
            html += '</div>';
            html += '</div>';
        });

        carResults.innerHTML = html;

        // Przewiń do góry
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Zacznij od nowa
    function startOver() {
        // Resetuj stan
        currentStep = 1;
        customBudgetValue = null;

        // Resetuj formularz
        form.reset();

        // Pokaż formularz
        form.style.display = 'block';
        document.querySelector('.progress-bar').style.display = 'block';
        document.querySelector('.step-indicator').style.display = 'block';
        resultsSection.style.display = 'none';

        // Aktualizuj UI
        updateUI();
    }

    // ===== DRAG AND DROP =====
    
    function initDragAndDrop() {
        if (!priorityList) {
            console.log('Lista priorytetów nie znaleziona');
            return;
        }

        const items = priorityList.querySelectorAll('.priority-item');
        let draggedItem = null;

        items.forEach(function(item) {
            item.draggable = true;

            item.addEventListener('dragstart', function(e) {
                draggedItem = this;
                this.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
            });

            item.addEventListener('dragend', function() {
                this.classList.remove('dragging');
                document.querySelectorAll('.priority-item').forEach(function(i) {
                    i.classList.remove('drag-over');
                });
                draggedItem = null;
            });

            item.addEventListener('dragover', function(e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            });

            item.addEventListener('dragenter', function(e) {
                e.preventDefault();
                if (this !== draggedItem) {
                    this.classList.add('drag-over');
                }
            });

            item.addEventListener('dragleave', function() {
                this.classList.remove('drag-over');
            });

            item.addEventListener('drop', function(e) {
                e.preventDefault();
                if (this !== draggedItem && draggedItem) {
                    const allItems = Array.from(priorityList.querySelectorAll('.priority-item'));
                    const draggedIndex = allItems.indexOf(draggedItem);
                    const targetIndex = allItems.indexOf(this);
                    
                    if (draggedIndex < targetIndex) {
                        this.parentNode.insertBefore(draggedItem, this.nextSibling);
                    } else {
                        this.parentNode.insertBefore(draggedItem, this);
                    }
                }
                this.classList.remove('drag-over');
            });
        });

        console.log('Drag and drop zainicjalizowany');
    }

});
