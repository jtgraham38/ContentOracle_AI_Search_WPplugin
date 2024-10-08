/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

/* My imports here */
import { RichText, __experimentalUseBorderProps as useBorderProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

export default function Edit({
	attributes,
	setAttributes,
	className,
}) {	
	//get a unique id suffix for this block instance
	const iid = Math.random().toString(36).substr(2, 9)

	//load the props
	const blockProps = useBlockProps();
	const borderProps = useBorderProps(attributes);

	//create styles for each element
	const buttonStyles = {
		borderRadius: borderProps.style.borderRadius,
		color: blockProps.style.color,
		backgroundColor: blockProps.style.backgroundColor,
	}
	
	const inputStyles = {
		borderRadius: borderProps.style.borderRadius,
	}

	const labelStyles = {
		//color: blockProps.style.color,
		fontSize: blockProps.style.fontSize,
	}

	const rootStyles = {
		width: attributes.width
	}

	//get block props, minus the style classNames
	const blockPropsNoStyle = {...blockProps};

	//remove everything form classNames beginning with "has-" or "is-"
	blockPropsNoStyle.className = blockPropsNoStyle.className.split(' ').filter( (className) => {
		return !className.startsWith('has-') && !className.startsWith('is-');
	}).join(' ');
	delete blockPropsNoStyle.style;
	
	//add my classname to the style-less block props
	blockPropsNoStyle.className += ' contentoracle-ai_search_root';

	return (
		<>
		<InspectorControls>
			<PanelBody>
				<div className="contentoracle-ai_panelbody_root">
					<h3>Display Settings</h3>
					
					<div className="contentoracle-ai_panelbody_group">
						<div className="contentoracle-ai_panelbody_input_container">
							<label 
								className="components-base-control__label aceef-fb-c-f-cfc-1v57ksj ej5x27r2" 
								htmlFor={`wp-block-search_width_${iid}`}>
								Width
							</label>
							<input 
								type="range" 
								min="15" 
								max="100" 
								step="1"
								defaultValue={ parseInt(attributes.width.slice(0,-1)) }
								id={`wp-block-search_width_${iid}`}
								onChange={ ( event ) => {
									//console.log(attributes)
									setAttributes( { width: event.target.value + "%" } );
								} }
							></input>
						</div>
						<p>{ attributes?.width || "-" } </p>
					</div>
						
					<div className="contentoracle-ai_panelbody_group">
						<div className="contentoracle-ai_panelbody_input_container">
							<label 
								className="components-base-control__label aceef-fb-c-f-cfc-1v57ksj ej5x27r2" 
								htmlFor={`wp-block-search_notice_msg_${iid}`}>
								Notice Text (Leave blank for no notice)
							</label>
							<input 
								type="text"
								maxLength="255"
								defaultValue={ attributes?.noticeText || "" }
								id={`wp-block-search_notice_msg_${iid}`}
								onChange={ ( event ) => {
									//console.log(attributes)
									setAttributes( { noticeText: event.target.value } );
								} }
							></input>
						</div>
					</div>	

				</div>
			</PanelBody>
		</InspectorControls>

		<div { ...blockPropsNoStyle } style={ rootStyles }>
			<RichText
				tagName="label"
				className="contentoracle-ai_search_label wp-block-search__label"
				placeholder="Label here..."
				value={ attributes.label }
				style={ labelStyles }
				onChange={ ( newValue ) => {
					setAttributes( { label: newValue } );
				} }
			>

			</RichText>
			<div {...borderProps} className="contentoracle-ai_search_container" >
				<input 
					type="search" 
					aria-label="Optional placeholder text" 
					placeholder="Optional placeholder…" 
					defaultValue={ attributes.placeholder }
					className="contentoracle-ai_search_input wp-block-search__input"
					style={ inputStyles }
					onChange={ ( event ) => {
						setAttributes( { placeholder: event.target.value } );
					} }
				>
				</input>
				<div 
					type="submit" 
					style={ buttonStyles }
					className='contentoracle-ai_search_button'
				>
					Search
				</div>
			</div>

		</div>
		</>
	);
}
