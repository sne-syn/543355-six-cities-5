import React from 'react';
import renderer from 'react-test-renderer';
import Host from './host';
import {host, hostPro} from '../../test-data/host-test-data';

const description = `Gran suite con entrada independiente y baño interior privado en el centro de Segovia. Privacidad y comodidad a tan sólo tres minutos del acueducto.Amplia y luminosa, con 2 camas de 105 (+ 1 opcional de 90), baño completo, calefacción, mininevera, microondas, vajilla, cubertería básica, Internet y un balcón grande y soleado.I speak English, Italian and Spanish`;

describe(`<Host /> test`, () => {
  it(` should render Host correctly`, () => {
    const tree = renderer.create((
      <Host
        description={description}
        host={host}
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`should render Host with Pro-mark correctly`, () => {
    const tree = renderer.create((
      <Host
        description={description}
        host={hostPro}
      />
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
