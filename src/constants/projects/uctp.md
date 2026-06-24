**Uncorrelated Orbital Track Processing (UCTP)** is a comprehensive benchmarking framework developed for the **Space Force and Air Force Research Lab** to evaluate and compare different algorithms for estimating satellite orbits from sparse optical observations.

## Project Overview

This research project focuses on developing standardized tools and methodologies for processing uncorrelated track data - observations of satellites that cannot be immediately associated with known objects. The framework provides a systematic approach to evaluate the performance of different UCTP algorithms under various conditions.

## Technical Implementation

### Core Algorithms
- **Modified Gauss Method**: Implemented for initial orbit determination from three angular observations
- **Herrick–Gibbs Method**: Used for orbit determination from three position vectors
- **Batch Least-Squares Refinement**: Applied to improve orbital accuracy through iterative optimization

### Key Technologies
- **Python**: Primary development language for algorithm implementation
- **Orekit**: Used for coordinate frame conversions and orbit propagation
- **Scientific Computing Libraries**: NumPy, SciPy for numerical computations
- **Data Analysis Tools**: Pandas for data manipulation and analysis

### Framework Components
1. **Data Generation Tools**: Standardized simulation of observation datasets
2. **Algorithm Pipeline**: Modular system for implementing and testing UCTP methods
3. **Performance Metrics**: Custom orbital accuracy metrics for objective comparison
4. **Automated Reporting**: Performance analysis and comparison reports

## Research Impact

This framework enables researchers and engineers to:
- Objectively compare different UCTP algorithms
- Standardize testing procedures across the space tracking community
- Improve satellite tracking capabilities for space situational awareness
- Support Space Force and Air Force research initiatives in space domain awareness

## Applications

The UCTP framework supports critical space operations including:
- Space situational awareness
- Satellite tracking and monitoring
- Orbital debris management
- Space traffic management
- Defense space operations

This project represents a significant contribution to space technology research and supports the United States' capabilities in space domain awareness and satellite tracking.
