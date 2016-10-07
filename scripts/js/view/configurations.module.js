/**
 * Created with IntelliJ IDEA.
 * User: myyong
 * Date: 27/11/15
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */

var configurationsModule = angular.module('Optimise.configurations',[]);

configurationsModule.factory('OptimiseDefaultConfig', function () {
    var config = {
        "name": "OptimiseDefaultConfig",
        "children": [
            {
                "name": "Profile", "include": true, "minimalInfo":true, "id": "profile",
                "children": [
                    {
                        "name": "Demographic","include": true, "minimalInfo":true, "id": "demographic",
                        "children": [
                            {"name": "Smoker", "include": true, "minimalInfo":false, "id": "smoker"},
                            {"name": "Alchohol", "include": true, "minimalInfo":false, "id": "alchohol"}
                        ]
                    },
                    {
                        "name": "Medical History","include": true, "minimalInfo":true, "id": "medicalHistory",
                        "children": [
                            {"name": "Medical Conditions", "include": true, "minimalInfo":true, "id": "medicalConditions"},
                            {"name": "Family History", "include": true, "minimalInfo":true, "id": "familyHistory"}
                        ]
                    },
                    {
                        "name": "Diagnosis", "include": true, "minimalInfo":true, "id": "diagnosis",
                        "children": [
                            {"name": "Initial Symptoms", "include": true, "minimalInfo":true, "id": "initialSymptoms"},
                            {"name": "Onset Course", "include": true, "minimalInfo":true, "id": "onsetCourse"},
                            {"name": "Secondary Progressive Phase", "include": true, "minimalInfo":true, "id": "secondaryProgressive"}
                        ]
                    }
                ]
            },
            {
                "name": "Timeline", "include": true, "minimalInfo":true, "id": "timeline"
            },
            {
                "name": "Visits", "include": true, "minimalInfo":true, "id": "visits",
                "children": [
                    {
                        "name": "Vital Signs", "include": true, "minimalInfo":true,
                        "children": [
                            {"name": "Systolic Blood Pressure", "include": true, "minimalInfo":true, "id": "systolic"},
                            {"name": "Diastolic Blood Pressure", "include": true, "minimalInfo":true, "id": "diastolic"},
                            {"name": "Height", "include": true, "minimalInfo":true, "id": "relapse", "id": "height"},
                            {"name": "Weight", "include": true, "minimalInfo":true, "id": "relapse", "id": "weight"}
                        ]
                    },
                    {
                        "name": "Functional System", "include": true, "minimalInfo":true, "id": "impairment",
                        "children": [
                            {"name": "EDSS", "include": false, "minimalInfo":false, "id": "edss"},
                            {"name": "EDMUS", "include": true, "minimalInfo":true, "id": "edmus"},
                            {"name": "Eight Meter Walk", "include": false, "minimalInfo":false, "id": "eightMWalk"},
                            {"name": "Nine Hole Peg", "include": false, "minimalInfo":false, "id": "ninePegHold"},
                            {"name": "Low Contrast Visual Acuity", "include": false, "minimalInfo":false, "id": "LCVA"},
                            {"name": "Symbol Digit Modality", "include": false, "minimalInfo":false, "id": "SDM"}
                        ]
                    },
                    {
                        "name": "Symptoms", "include": true, "minimalInfo":true, "id": "symptoms"
                    }
                ]
            },
            {
                "name": "Relapses", "include": true, "minimalInfo":true, "id": "relapse",
                "children": [
                    {
                        "name": "Systems Affected", "include": true, "minimalInfo":true, "id": "relapseAffecting"
                    },
                    {
                        "name": "Severity", "include": true, "minimalInfo":true, "id": "relapseSeverity"
                    },
                    {
                        "name": "Impact on ADLS", "include": true, "minimalInfo":true, "id": "relapseImpact"
                    },
                    {
                        "name": "Steroids", "include": false, "minimalInfo":false, "id": "steroid",
                        "children": [
                            {"name": "Administered (Y/N)", "include": false, "minimalInfo":false, "id": "steroidGiven"},
                            {"name": "Drug Name", "include": false, "minimalInfo":false, "id": "steroidName"},
                            {"name": "Drug Dates", "include": false, "minimalInfo":false, "id": "steroidDate"}
                        ]
                    }
                ]
            },
            {
                "name": "Medical Events", "include": false, "minimalInfo":false, "id": "medicalEvents",
                "children": [
                    {
                        "name": "Medical Condition", "include": false, "minimalInfo":false, "id": "conditionName"
                    },
                    {
                        "name": "Severity", "include": false, "minimalInfo":false, "id": "conditionSeverity"
                    },
                    {
                        "name": "Outcome", "include": false, "minimalInfo":false, "id": "conditionOutcome"
                    }
                ]
            },
            {
                "name": "Tests", "include": true, "minimalInfo":true,"id": "tests",
                "children": [
                    {
                        "name": "Laboratory Tests", "include": true, "minimalInfo":true, "id": "labTests",
                        "children": [
                            {"name": "Haematology", "include": true, "minimalInfo":true, "id": "haematology"},
                            {"name": "Blood Chemistry", "include": true, "minimalInfo":true, "id": "blood"},
                            {"name": "Thyroid Functions", "include": true, "minimalInfo":true, "id": "thyroid"},
                            {"name": "Serological Tests", "include": true, "minimalInfo":true, "id": "serology"},
                            {"name": "Auto Antibody Tests", "include": true, "minimalInfo":true, "id": "antibody"}
                        ]
                    },
                    {
                        "name": "Evoked Potentials", "include": true, "minimalInfo":true, "id": "evokedPotentials",
                        "children": [
                            {
                                "name": "VEP", "include": true, "minimalInfo":true, "id": "VEP",
                                "children": [
                                    {"name": "Abnormality (Y/N)", "include": true, "minimalInfo":true, "id": "vepAbnormal"},
                                    {"name": "Amplitude", "include": false, "minimalInfo":false, "id": "vepAmplitude"},
                                    {"name": "P100 Latency", "include": false, "minimalInfo":false, "id": "vepLatency"}
                                ]
                            },
                            {
                                "name": "SEP", "include": true, "minimalInfo":true, "id": "SEP",
                                "children": [
                                    {"name": "Abnormality (Y/N)", "include": true, "minimalInfo":true, "id": "sepAbnormal"}
                                ]
                            },
                            {
                                "name": "MEP", "include": false,"minimalInfo":false, "id": "MEP",
                                "children": [
                                    {
                                        "name": "Abnormality (Y/N)", "include": false, "minimalInfo":false, "id": "mepAbnormal"}
                                ]
                            }
                        ]
                    },
                    {
                        "name": "MRI", "include": true, "minimalInfo":true, "id": "mri",
                        "children": [
                            {"name": "Scans", "include": true, "minimalInfo":true, "id": "scans"},
                            {"name": "Morphology", "include": true, "minimalInfo":true, "id": "morphology"},
                            {"name": "Analytics", "include": false, "minimalInfo":false, "id": "analytics"}
                        ]
                    }
                ]
            },
            {
                "name": "PROMS", "include": true, "minimalInfo":true, "id": "proms",
                "children": [
                    {
                        "name": "PDDS", "include": true, "minimalInfo":true, "id": "pdds"
                    },
                    {
                        "name": "MSQOL-54", "include": true, "minimalInfo":true, "id": "msqol54"
                    }
                ]
            },
            {
                "name": "Treatments", "include": true, "minimalInfo":true, "id": "treatments",
                "children": [
                    {
                        "name": "Dose/Administration", "include": true, "minimalInfo":true, "id": "dose"
                    },
                    {
                        "name": "Drug Holiday", "include": true, "minimalInfo":true, "id": "holiday"
                    },
                    {
                        "name": "Drug Discontinuation" , "include": true, "minimalInfo":true, "id": "discontinue"
                    }
                ]
            }
        ]
    };
    return config;
});
