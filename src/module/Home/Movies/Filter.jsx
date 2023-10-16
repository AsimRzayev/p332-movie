import { Box, Checkbox, Flex, Heading, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../../../components/Loading'
import { useFilter } from './FilterProvider';
import { FilterService } from '../../../services/filterService';


const filterService=new FilterService();

const Filter = () => {


    const{data:filters,isLoading,isError}= useQuery("get.Filters",()=>filterService.getFilters())

    const {setFilter}=useFilter();

    if(isLoading){
        return <Loading/>
    }

    if(isError){
        return <h1>Error...</h1>
    }

  return (
    <VStack divider={<StackDivider borderColor='gray.200' />} spacing={6} w="20%" bg="black"  boxShadow='outline' borderRadius="sm" p={4}>

        <Box w="full">
                <Heading as="h6" fontSize="2xl" textAlign="center" mb={6}>
                    Category
                </Heading>

                <VStack spacing={4} align='stretch'>
                    {filters.categories.map(category=><Checkbox onChange={(e)=>{
                        const isChecked=e.target.checked;

setFilter((filter)=>{
    return {
        ...filter,
        category:isChecked?[...filter.category,category]:filter.category.filter(c=>c!==category)
    }
})
                    }}  key={category} colorScheme="whiteAlpha">{category}</Checkbox>)}
                </VStack>
        </Box>

        <Box  w="full">
                <Heading as="h6" fontSize="2xl" textAlign="center" mb={6}>
                    Ratings
                </Heading>

                <Slider onChange={(val)=>{
             
                    setFilter(filter=>{
                        return {...filter,maxRating:val}
                    })

                }} max={filters.maxRating} min={filters.minRating} defaultValue={filters.minRating}  step={0.1} >
        <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
<Flex w="full" mt={2} justifyContent="space-between"><Text as="span">{filters.minRating}</Text>  <Text as="span">{filters.maxRating}</Text></Flex>
        </Box>

        <Box  w="full">
                <Heading as="h6" fontSize="2xl" textAlign="center" mb={6}>
                    Languages
                </Heading>

                <VStack spacing={4} align='stretch'>
                    {
                        filters.languages.map(language=><Checkbox key={language} onChange={(e)=>{
                            const isChecked=e.target.checked;
    
    setFilter((filter)=>{
        return {
            ...filter,
            language:isChecked?[...filter.language,language]:filter.language.filter(c=>c!==language)
        }
    })
                        }}  colorScheme="whiteAlpha">{language}</Checkbox>)
                    }
                    
                </VStack>
        </Box>

        <Box  w="full">
                <Heading as="h6" fontSize="2xl" textAlign="center" mb={6}>
                    Release Date
                </Heading>

             <Flex columnGap={4}>
                <Input type="date" placeholder='Start date' bg="gray" /> 
                <Input type="date" placeholder='End date' bg="gray" /> 
             </Flex>
        </Box>

    </VStack>
  )
}

export default Filter