/**
 * Tech Stack 2x2 Grid Diagnostic Script
 * This script validates that the 2x2 grid implementation is working correctly
 */

(function() {
    'use strict';
    
    console.log('🔍 Tech Stack 2x2 Grid Diagnostic Started');
    
    function runDiagnostics() {
        const techCategories = document.querySelectorAll('.tech-category');
        const results = {
            totalCategories: techCategories.length,
            categories: [],
            issues: [],
            summary: {
                gridLayoutCorrect: 0,
                overflowHidden: 0,
                correctItemCount: 0,
                properDataAttributes: 0
            }
        };
        
        console.log(`Found ${techCategories.length} tech categories`);
        
        techCategories.forEach((category, index) => {
            const title = category.querySelector('h3')?.textContent || `Category ${index + 1}`;
            const techIcons = category.querySelector('.tech-icons');
            const techItems = category.querySelectorAll('.tech-item, .tech-icon');
            const visibleItems = Array.from(techItems).filter(item => 
                window.getComputedStyle(item).display !== 'none'
            );
            const dataItemCount = category.getAttribute('data-item-count');
            
            const categoryResult = {
                title: title,
                totalItems: techItems.length,
                visibleItems: visibleItems.length,
                dataItemCount: dataItemCount,
                hasCorrectDataAttribute: !!dataItemCount,
                issues: []
            };
            
            // Check grid layout
            if (techIcons) {
                const styles = window.getComputedStyle(techIcons);
                const gridTemplateColumns = styles.gridTemplateColumns;
                const gridTemplateRows = styles.gridTemplateRows;
                const overflow = styles.overflow;
                const height = styles.height;
                
                categoryResult.gridTemplateColumns = gridTemplateColumns;
                categoryResult.gridTemplateRows = gridTemplateRows;
                categoryResult.overflow = overflow;
                categoryResult.height = height;
                
                // Validate 2x2 grid structure
                const expectedColumns = dataItemCount === '1' ? '1fr' : 
                                      dataItemCount === '2' ? 'repeat(2, 1fr)' : 
                                      'repeat(2, 1fr)';
                
                const expectedRows = (dataItemCount === '1' || dataItemCount === '2') ? '1fr' : 'repeat(2, 1fr)';
                
                if (gridTemplateColumns.includes('repeat(2') || gridTemplateColumns === '1fr') {
                    results.summary.gridLayoutCorrect++;
                    categoryResult.gridLayoutCorrect = true;
                } else {
                    categoryResult.issues.push(`Incorrect grid columns: ${gridTemplateColumns}`);
                    categoryResult.gridLayoutCorrect = false;
                }
                
                if (overflow === 'hidden') {
                    results.summary.overflowHidden++;
                    categoryResult.overflowHidden = true;
                } else {
                    categoryResult.issues.push(`Overflow not hidden: ${overflow}`);
                    categoryResult.overflowHidden = false;
                }
            } else {
                categoryResult.issues.push('No .tech-icons container found');
            }
            
            // Check item count limits (should be max 4 visible)
            if (visibleItems.length <= 4) {
                results.summary.correctItemCount++;
                categoryResult.correctItemCount = true;
            } else {
                categoryResult.issues.push(`Too many visible items: ${visibleItems.length} (max 4)`);
                categoryResult.correctItemCount = false;
            }
            
            // Check data attribute
            if (dataItemCount) {
                results.summary.properDataAttributes++;
                categoryResult.properDataAttributes = true;
            } else {
                categoryResult.issues.push('Missing data-item-count attribute');
                categoryResult.properDataAttributes = false;
            }
            
            if (categoryResult.issues.length > 0) {
                results.issues.push(...categoryResult.issues.map(issue => `${title}: ${issue}`));
            }
            
            results.categories.push(categoryResult);
            
            console.log(`📋 ${title}:`);
            console.log(`  Total items: ${techItems.length}`);
            console.log(`  Visible items: ${visibleItems.length}`);
            console.log(`  Data count: ${dataItemCount}`);
            console.log(`  Grid columns: ${categoryResult.gridTemplateColumns}`);
            console.log(`  Grid rows: ${categoryResult.gridTemplateRows}`);
            console.log(`  Overflow: ${categoryResult.overflow}`);
            console.log(`  Height: ${categoryResult.height}`);
            if (categoryResult.issues.length > 0) {
                console.log(`  ⚠️ Issues: ${categoryResult.issues.join(', ')}`);
            }
            console.log('---');
        });
        
        // Overall summary
        console.log('📊 DIAGNOSTIC SUMMARY:');
        console.log(`✅ Categories with correct grid layout: ${results.summary.gridLayoutCorrect}/${results.totalCategories}`);
        console.log(`✅ Categories with hidden overflow: ${results.summary.overflowHidden}/${results.totalCategories}`);
        console.log(`✅ Categories with correct item count: ${results.summary.correctItemCount}/${results.totalCategories}`);
        console.log(`✅ Categories with proper data attributes: ${results.summary.properDataAttributes}/${results.totalCategories}`);
        
        if (results.issues.length > 0) {
            console.log('🚨 ISSUES FOUND:');
            results.issues.forEach(issue => console.log(`  - ${issue}`));
        } else {
            console.log('🎉 No issues found! 2x2 grid implementation is working correctly.');
        }
        
        // Test responsiveness
        testResponsiveness();
        
        return results;
    }
    
    function testResponsiveness() {
        console.log('📱 Testing responsiveness...');
        const techIcons = document.querySelectorAll('.tech-icons');
        
        // Test different viewport sizes
        const testSizes = [
            { width: 1200, name: 'Desktop' },
            { width: 768, name: 'Tablet' },
            { width: 480, name: 'Mobile' }
        ];
        
        testSizes.forEach(size => {
            console.log(`📏 Testing ${size.name} (${size.width}px):`);
            
            // Simulate viewport size (limited simulation)
            document.body.style.width = size.width + 'px';
            
            techIcons.forEach((techIcon, index) => {
                const styles = window.getComputedStyle(techIcon);
                const iconItems = techIcon.querySelectorAll('.tech-item i, .tech-icon img');
                
                if (iconItems.length > 0) {
                    const iconStyle = window.getComputedStyle(iconItems[0]);
                    console.log(`  Category ${index + 1}: Icon size ${iconStyle.width} x ${iconStyle.height}`);
                }
            });
        });
        
        // Reset body width
        document.body.style.width = '';
        console.log('📱 Responsiveness test completed');
    }
    
    function checkCSSLoaded() {
        // Check if our CSS is loaded by looking for specific styles
        const testElement = document.createElement('div');
        testElement.className = 'tech-icons';
        testElement.style.visibility = 'hidden';
        testElement.style.position = 'absolute';
        document.body.appendChild(testElement);
        
        const styles = window.getComputedStyle(testElement);
        const hasGridDisplay = styles.display === 'grid';
        const hasCorrectColumns = styles.gridTemplateColumns.includes('repeat(2');
        
        document.body.removeChild(testElement);
        
        console.log(`🎨 CSS Status:`);
        console.log(`  Grid display: ${hasGridDisplay ? '✅' : '❌'}`);
        console.log(`  Correct columns: ${hasCorrectColumns ? '✅' : '❌'}`);
        
        return hasGridDisplay && hasCorrectColumns;
    }
    
    // Run diagnostics when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                console.log('🎨 Checking CSS loading...');
                checkCSSLoaded();
                console.log('🔍 Running diagnostics...');
                runDiagnostics();
            }, 100);
        });
    } else {
        setTimeout(() => {
            console.log('🎨 Checking CSS loading...');
            checkCSSLoaded();
            console.log('🔍 Running diagnostics...');
            runDiagnostics();
        }, 100);
    }
    
    // Make diagnostic function available globally for manual testing
    window.techStackDiagnostics = runDiagnostics;
    console.log('💡 Run window.techStackDiagnostics() to manually run diagnostics');
    
})();
