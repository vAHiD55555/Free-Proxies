function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.133.214:16379",
        "SOCKS 123.54.197.52:20804",
        "SOCKS 123.54.197.50:22619",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 123.54.197.53:22777",
        "SOCKS 123.54.197.18:22936",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 138.68.247.51:1080",
        "SOCKS 123.54.197.24:23569",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 123.54.197.18:20952",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 123.54.197.21:22855",
        "SOCKS 123.54.197.50:21721",
        "SOCKS 123.54.197.53:23404",
        "SOCKS 115.127.80.1:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}