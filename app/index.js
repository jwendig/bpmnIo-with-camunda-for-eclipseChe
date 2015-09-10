// BEGIN COPY BLOG (copy this to the top of the generated .js document)

var bpmnIo_fkt_createNewModeler;

// END COPY BLOG

bpmnIo_fkt_createNewModeler = function(wrapperId){
	
	var renderer = new BpmnModeler({
		container : $('#'+wrapperId),
		moddleExtensions : {
			camunda : camundaMetaModel
		}
	});
	
	return renderer;
};

var $ = require('jquery'), BpmnModeler = require('bpmn-js/lib/Modeler');
var camundaMetaModel = require('../resources/camunda');





