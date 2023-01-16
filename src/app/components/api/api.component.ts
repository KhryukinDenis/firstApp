import { Component, OnInit } from '@angular/core';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      url: 'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v2.0/yaml/petstore.yaml',
      apisSorter: 'alpha'
    });
  }

}
