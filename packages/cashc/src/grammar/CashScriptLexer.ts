// Generated from src/grammar/CashScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN.js";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer.js";
import { CharStream } from "antlr4ts/CharStream.js";
import { Lexer } from "antlr4ts/Lexer.js";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator.js";
import { NotNull } from "antlr4ts/Decorators.js";
import { Override } from "antlr4ts/Decorators.js";
import { RuleContext } from "antlr4ts/RuleContext.js";
import { Vocabulary } from "antlr4ts/Vocabulary.js";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl.js";

import * as Utils from "antlr4ts/misc/Utils.js";


export class CashScriptLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly VersionLiteral = 57;
	public static readonly BooleanLiteral = 58;
	public static readonly NumberUnit = 59;
	public static readonly NumberLiteral = 60;
	public static readonly Bytes = 61;
	public static readonly Bound = 62;
	public static readonly StringLiteral = 63;
	public static readonly DateLiteral = 64;
	public static readonly HexLiteral = 65;
	public static readonly TxVar = 66;
	public static readonly NullaryOp = 67;
	public static readonly Identifier = 68;
	public static readonly WHITESPACE = 69;
	public static readonly COMMENT = 70;
	public static readonly LINE_COMMENT = 71;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
		"T__49", "T__50", "T__51", "T__52", "T__53", "T__54", "T__55", "VersionLiteral", 
		"BooleanLiteral", "NumberUnit", "NumberLiteral", "Bytes", "Bound", "StringLiteral", 
		"DateLiteral", "HexLiteral", "TxVar", "NullaryOp", "Identifier", "WHITESPACE", 
		"COMMENT", "LINE_COMMENT",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'pragma'", "';'", "'cashscript'", "'^'", "'~'", "'>='", "'>'", 
		"'<'", "'<='", "'='", "'contract'", "'{'", "'}'", "'function'", "'('", 
		"','", "')'", "'require'", "'if'", "'else'", "'new'", "'['", "']'", "'tx.outputs'", 
		"'.value'", "'.lockingBytecode'", "'.tokenCategory'", "'.nftCommitment'", 
		"'.tokenAmount'", "'tx.inputs'", "'.outpointTransactionHash'", "'.outpointIndex'", 
		"'.unlockingBytecode'", "'.sequenceNumber'", "'.reverse()'", "'.length'", 
		"'.split'", "'!'", "'-'", "'*'", "'/'", "'%'", "'+'", "'=='", "'!='", 
		"'&'", "'|'", "'&&'", "'||'", "'constant'", "'int'", "'bool'", "'string'", 
		"'pubkey'", "'sig'", "'datasig'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "VersionLiteral", "BooleanLiteral", "NumberUnit", "NumberLiteral", 
		"Bytes", "Bound", "StringLiteral", "DateLiteral", "HexLiteral", "TxVar", 
		"NullaryOp", "Identifier", "WHITESPACE", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CashScriptLexer._LITERAL_NAMES, CashScriptLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CashScriptLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CashScriptLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CashScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return CashScriptLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CashScriptLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CashScriptLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CashScriptLexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02I\u0328\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03" +
		"#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03" +
		"%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03" +
		"(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03-\x03.\x03" +
		".\x03.\x03/\x03/\x030\x030\x031\x031\x031\x032\x032\x032\x033\x033\x03" +
		"3\x033\x033\x033\x033\x033\x033\x034\x034\x034\x034\x035\x035\x035\x03" +
		"5\x035\x036\x036\x036\x036\x036\x036\x036\x037\x037\x037\x037\x037\x03" +
		"7\x037\x038\x038\x038\x038\x039\x039\x039\x039\x039\x039\x039\x039\x03" +
		":\x06:\u01F0\n:\r:\x0E:\u01F1\x03:\x03:\x06:\u01F6\n:\r:\x0E:\u01F7\x03" +
		":\x03:\x06:\u01FC\n:\r:\x0E:\u01FD\x03;\x03;\x03;\x03;\x03;\x03;\x03;" +
		"\x03;\x03;\x05;\u0209\n;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<" +
		"\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u0244\n<\x03=\x05=\u0247\n=\x03=" +
		"\x06=\u024A\n=\r=\x0E=\u024B\x03=\x03=\x06=\u0250\n=\r=\x0E=\u0251\x05" +
		"=\u0254\n=\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u025D\n>\x03>\x03>" +
		"\x03>\x03>\x05>\u0263\n>\x03?\x03?\x07?\u0267\n?\f?\x0E?\u026A\v?\x03" +
		"@\x03@\x03@\x03@\x07@\u0270\n@\f@\x0E@\u0273\v@\x03@\x03@\x03@\x03@\x03" +
		"@\x07@\u027A\n@\f@\x0E@\u027D\v@\x03@\x05@\u0280\n@\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x07B\u028E\nB\fB\x0EB\u0291" +
		"\vB\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x05" +
		"C\u02A0\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0300" +
		"\nD\x03E\x03E\x07E\u0304\nE\fE\x0EE\u0307\vE\x03F\x06F\u030A\nF\rF\x0E" +
		"F\u030B\x03F\x03F\x03G\x03G\x03G\x03G\x07G\u0314\nG\fG\x0EG\u0317\vG\x03" +
		"G\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03H\x07H\u0322\nH\fH\x0EH\u0325" +
		"\vH\x03H\x03H\x05\u0271\u027B\u0315\x02\x02I\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15" +
		"\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02" +
		"\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191" +
		"\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02" +
		"\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-" +
		"Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x02" +
		"9q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02B\x83\x02" +
		"C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02I\x03\x02\x0E\x03" +
		"\x022;\x03\x02//\x04\x02GGgg\x03\x023;\x05\x02\f\f\x0F\x0F$$\x05\x02\f" +
		"\f\x0F\x0F))\x04\x02ZZzz\x05\x022;CHch\x04\x02C\\c|\x06\x022;C\\aac|\x05" +
		"\x02\v\f\x0E\x0F\"\"\x04\x02\f\f\x0F\x0F\x02\u034B\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
		"\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
		"\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)" +
		"\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02" +
		"K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02" +
		"\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02" +
		"\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03" +
		"\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02" +
		"\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02" +
		"m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02" +
		"\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02" +
		"\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02" +
		"\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02" +
		"\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02" +
		"\x8D\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x03\x91\x03\x02\x02\x02\x05" +
		"\x98\x03\x02\x02\x02\x07\x9A\x03\x02\x02\x02\t\xA5\x03\x02\x02\x02\v\xA7" +
		"\x03\x02\x02\x02\r\xA9\x03\x02\x02\x02\x0F\xAC\x03\x02\x02\x02\x11\xAE" +
		"\x03\x02\x02\x02\x13\xB0\x03\x02\x02\x02\x15\xB3\x03\x02\x02\x02\x17\xB5" +
		"\x03\x02\x02\x02\x19\xBE\x03\x02\x02\x02\x1B\xC0\x03\x02\x02\x02\x1D\xC2" +
		"\x03\x02\x02\x02\x1F\xCB\x03\x02\x02\x02!\xCD\x03\x02\x02\x02#\xCF\x03" +
		"\x02\x02\x02%\xD1\x03\x02\x02\x02\'\xD9\x03\x02\x02\x02)\xDC\x03\x02\x02" +
		"\x02+\xE1\x03\x02\x02\x02-\xE5\x03\x02\x02\x02/\xE7\x03\x02\x02\x021\xE9" +
		"\x03\x02\x02\x023\xF4\x03\x02\x02\x025\xFB\x03\x02\x02\x027\u010C\x03" +
		"\x02\x02\x029\u011B\x03\x02\x02\x02;\u012A\x03\x02\x02\x02=\u0137\x03" +
		"\x02\x02\x02?\u0141\x03\x02\x02\x02A\u015A\x03\x02\x02\x02C\u0169\x03" +
		"\x02\x02\x02E\u017C\x03\x02\x02\x02G\u018C\x03\x02\x02\x02I\u0197\x03" +
		"\x02\x02\x02K\u019F\x03\x02\x02\x02M\u01A6\x03\x02\x02\x02O\u01A8\x03" +
		"\x02\x02\x02Q\u01AA\x03\x02\x02\x02S\u01AC\x03\x02\x02\x02U\u01AE\x03" +
		"\x02\x02\x02W\u01B0\x03\x02\x02\x02Y\u01B2\x03\x02\x02\x02[\u01B5\x03" +
		"\x02\x02\x02]\u01B8\x03\x02\x02\x02_\u01BA\x03\x02\x02\x02a\u01BC\x03" +
		"\x02\x02\x02c\u01BF\x03\x02\x02\x02e\u01C2\x03\x02\x02\x02g\u01CB\x03" +
		"\x02\x02\x02i\u01CF\x03\x02\x02\x02k\u01D4\x03\x02\x02\x02m\u01DB\x03" +
		"\x02\x02\x02o\u01E2\x03\x02\x02\x02q\u01E6\x03\x02\x02\x02s\u01EF\x03" +
		"\x02\x02\x02u\u0208\x03\x02\x02\x02w\u0243\x03\x02\x02\x02y\u0246\x03" +
		"\x02\x02\x02{\u0262\x03\x02\x02\x02}\u0264\x03\x02\x02\x02\x7F\u027F\x03" +
		"\x02\x02\x02\x81\u0281\x03\x02\x02\x02\x83\u028A\x03\x02\x02\x02\x85\u029F" +
		"\x03\x02\x02\x02\x87\u02FF\x03\x02\x02\x02\x89\u0301\x03\x02\x02\x02\x8B" +
		"\u0309\x03\x02\x02\x02\x8D\u030F\x03\x02\x02\x02\x8F\u031D\x03\x02\x02" +
		"\x02\x91\x92\x07r\x02\x02\x92\x93\x07t\x02\x02\x93\x94\x07c\x02\x02\x94" +
		"\x95\x07i\x02\x02\x95\x96\x07o\x02\x02\x96\x97\x07c\x02\x02\x97\x04\x03" +
		"\x02\x02\x02\x98\x99\x07=\x02\x02\x99\x06\x03\x02\x02\x02\x9A\x9B\x07" +
		"e\x02\x02\x9B\x9C\x07c\x02\x02\x9C\x9D\x07u\x02\x02\x9D\x9E\x07j\x02\x02" +
		"\x9E\x9F\x07u\x02\x02\x9F\xA0\x07e\x02\x02\xA0\xA1\x07t\x02\x02\xA1\xA2" +
		"\x07k\x02\x02\xA2\xA3\x07r\x02\x02\xA3\xA4\x07v\x02\x02\xA4\b\x03\x02" +
		"\x02\x02\xA5\xA6\x07`\x02\x02\xA6\n\x03\x02\x02\x02\xA7\xA8\x07\x80\x02" +
		"\x02\xA8\f\x03\x02\x02\x02\xA9\xAA\x07@\x02\x02\xAA\xAB\x07?\x02\x02\xAB" +
		"\x0E\x03\x02\x02\x02\xAC\xAD\x07@\x02\x02\xAD\x10\x03\x02\x02\x02\xAE" +
		"\xAF\x07>\x02\x02\xAF\x12\x03\x02\x02\x02\xB0\xB1\x07>\x02\x02\xB1\xB2" +
		"\x07?\x02\x02\xB2\x14\x03\x02\x02\x02\xB3\xB4\x07?\x02\x02\xB4\x16\x03" +
		"\x02\x02\x02\xB5\xB6\x07e\x02\x02\xB6\xB7\x07q\x02\x02\xB7\xB8\x07p\x02" +
		"\x02\xB8\xB9\x07v\x02\x02\xB9\xBA\x07t\x02\x02\xBA\xBB\x07c\x02\x02\xBB" +
		"\xBC\x07e\x02\x02\xBC\xBD\x07v\x02\x02\xBD\x18\x03\x02\x02\x02\xBE\xBF" +
		"\x07}\x02\x02\xBF\x1A\x03\x02\x02\x02\xC0\xC1\x07\x7F\x02\x02\xC1\x1C" +
		"\x03\x02\x02\x02\xC2\xC3\x07h\x02\x02\xC3\xC4\x07w\x02\x02\xC4\xC5\x07" +
		"p\x02\x02\xC5\xC6\x07e\x02\x02\xC6\xC7\x07v\x02\x02\xC7\xC8\x07k\x02\x02" +
		"\xC8\xC9\x07q\x02\x02\xC9\xCA\x07p\x02\x02\xCA\x1E\x03\x02\x02\x02\xCB" +
		"\xCC\x07*\x02\x02\xCC \x03\x02\x02\x02\xCD\xCE\x07.\x02\x02\xCE\"\x03" +
		"\x02\x02\x02\xCF\xD0\x07+\x02\x02\xD0$\x03\x02\x02\x02\xD1\xD2\x07t\x02" +
		"\x02\xD2\xD3\x07g\x02\x02\xD3\xD4\x07s\x02\x02\xD4\xD5\x07w\x02\x02\xD5" +
		"\xD6\x07k\x02\x02\xD6\xD7\x07t\x02\x02\xD7\xD8\x07g\x02\x02\xD8&\x03\x02" +
		"\x02\x02\xD9\xDA\x07k\x02\x02\xDA\xDB\x07h\x02\x02\xDB(\x03\x02\x02\x02" +
		"\xDC\xDD\x07g\x02\x02\xDD\xDE\x07n\x02\x02\xDE\xDF\x07u\x02\x02\xDF\xE0" +
		"\x07g\x02\x02\xE0*\x03\x02\x02\x02\xE1\xE2\x07p\x02\x02\xE2\xE3\x07g\x02" +
		"\x02\xE3\xE4\x07y\x02\x02\xE4,\x03\x02\x02\x02\xE5\xE6\x07]\x02\x02\xE6" +
		".\x03\x02\x02\x02\xE7\xE8\x07_\x02\x02\xE80\x03\x02\x02\x02\xE9\xEA\x07" +
		"v\x02\x02\xEA\xEB\x07z\x02\x02\xEB\xEC\x070\x02\x02\xEC\xED\x07q\x02\x02" +
		"\xED\xEE\x07w\x02\x02\xEE\xEF\x07v\x02\x02\xEF\xF0\x07r\x02\x02\xF0\xF1" +
		"\x07w\x02\x02\xF1\xF2\x07v\x02\x02\xF2\xF3\x07u\x02\x02\xF32\x03\x02\x02" +
		"\x02\xF4\xF5\x070\x02\x02\xF5\xF6\x07x\x02\x02\xF6\xF7\x07c\x02\x02\xF7" +
		"\xF8\x07n\x02\x02\xF8\xF9\x07w\x02\x02\xF9\xFA\x07g\x02\x02\xFA4\x03\x02" +
		"\x02\x02\xFB\xFC\x070\x02\x02\xFC\xFD\x07n\x02\x02\xFD\xFE\x07q\x02\x02" +
		"\xFE\xFF\x07e\x02\x02\xFF\u0100\x07m\x02\x02\u0100\u0101\x07k\x02\x02" +
		"\u0101\u0102\x07p\x02\x02\u0102\u0103\x07i\x02\x02\u0103\u0104\x07D\x02" +
		"\x02\u0104\u0105\x07{\x02\x02\u0105\u0106\x07v\x02\x02\u0106\u0107\x07" +
		"g\x02\x02\u0107\u0108\x07e\x02\x02\u0108\u0109\x07q\x02\x02\u0109\u010A" +
		"\x07f\x02\x02\u010A\u010B\x07g\x02\x02\u010B6\x03\x02\x02\x02\u010C\u010D" +
		"\x070\x02\x02\u010D\u010E\x07v\x02\x02\u010E\u010F\x07q\x02\x02\u010F" +
		"\u0110\x07m\x02\x02\u0110\u0111\x07g\x02\x02\u0111\u0112\x07p\x02\x02" +
		"\u0112\u0113\x07E\x02\x02\u0113\u0114\x07c\x02\x02\u0114\u0115\x07v\x02" +
		"\x02\u0115\u0116\x07g\x02\x02\u0116\u0117\x07i\x02\x02\u0117\u0118\x07" +
		"q\x02\x02\u0118\u0119\x07t\x02\x02\u0119\u011A\x07{\x02\x02\u011A8\x03" +
		"\x02\x02\x02\u011B\u011C\x070\x02\x02\u011C\u011D\x07p\x02\x02\u011D\u011E" +
		"\x07h\x02\x02\u011E\u011F\x07v\x02\x02\u011F\u0120\x07E\x02\x02\u0120" +
		"\u0121\x07q\x02\x02\u0121\u0122\x07o\x02\x02\u0122\u0123\x07o\x02\x02" +
		"\u0123\u0124\x07k\x02\x02\u0124\u0125\x07v\x02\x02\u0125\u0126\x07o\x02" +
		"\x02\u0126\u0127\x07g\x02\x02\u0127\u0128\x07p\x02\x02\u0128\u0129\x07" +
		"v\x02\x02\u0129:\x03\x02\x02\x02\u012A\u012B\x070\x02\x02\u012B\u012C" +
		"\x07v\x02\x02\u012C\u012D\x07q\x02\x02\u012D\u012E\x07m\x02\x02\u012E" +
		"\u012F\x07g\x02\x02\u012F\u0130\x07p\x02\x02\u0130\u0131\x07C\x02\x02" +
		"\u0131\u0132\x07o\x02\x02\u0132\u0133\x07q\x02\x02\u0133\u0134\x07w\x02" +
		"\x02\u0134\u0135\x07p\x02\x02\u0135\u0136\x07v\x02\x02\u0136<\x03\x02" +
		"\x02\x02\u0137\u0138\x07v\x02\x02\u0138\u0139\x07z\x02\x02\u0139\u013A" +
		"\x070\x02\x02\u013A\u013B\x07k\x02\x02\u013B\u013C\x07p\x02\x02\u013C" +
		"\u013D\x07r\x02\x02\u013D\u013E\x07w\x02\x02\u013E\u013F\x07v\x02\x02" +
		"\u013F\u0140\x07u\x02\x02\u0140>\x03\x02\x02\x02\u0141\u0142\x070\x02" +
		"\x02\u0142\u0143\x07q\x02\x02\u0143\u0144\x07w\x02\x02\u0144\u0145\x07" +
		"v\x02\x02\u0145\u0146\x07r\x02\x02\u0146\u0147\x07q\x02\x02\u0147\u0148" +
		"\x07k\x02\x02\u0148\u0149\x07p\x02\x02\u0149\u014A\x07v\x02\x02\u014A" +
		"\u014B\x07V\x02\x02\u014B\u014C\x07t\x02\x02\u014C\u014D\x07c\x02\x02" +
		"\u014D\u014E\x07p\x02\x02\u014E\u014F\x07u\x02\x02\u014F\u0150\x07c\x02" +
		"\x02\u0150\u0151\x07e\x02\x02\u0151\u0152\x07v\x02\x02\u0152\u0153\x07" +
		"k\x02\x02\u0153\u0154\x07q\x02\x02\u0154\u0155\x07p\x02\x02\u0155\u0156" +
		"\x07J\x02\x02\u0156\u0157\x07c\x02\x02\u0157\u0158\x07u\x02\x02\u0158" +
		"\u0159\x07j\x02\x02\u0159@\x03\x02\x02\x02\u015A\u015B\x070\x02\x02\u015B" +
		"\u015C\x07q\x02\x02\u015C\u015D\x07w\x02\x02\u015D\u015E\x07v\x02\x02" +
		"\u015E\u015F\x07r\x02\x02\u015F\u0160\x07q\x02\x02\u0160\u0161\x07k\x02" +
		"\x02\u0161\u0162\x07p\x02\x02\u0162\u0163\x07v\x02\x02\u0163\u0164\x07" +
		"K\x02\x02\u0164\u0165\x07p\x02\x02\u0165\u0166\x07f\x02\x02\u0166\u0167" +
		"\x07g\x02\x02\u0167\u0168\x07z\x02\x02\u0168B\x03\x02\x02\x02\u0169\u016A" +
		"\x070\x02\x02\u016A\u016B\x07w\x02\x02\u016B\u016C\x07p\x02\x02\u016C" +
		"\u016D\x07n\x02\x02\u016D\u016E\x07q\x02\x02\u016E\u016F\x07e\x02\x02" +
		"\u016F\u0170\x07m\x02\x02\u0170\u0171\x07k\x02\x02\u0171\u0172\x07p\x02" +
		"\x02\u0172\u0173\x07i\x02\x02\u0173\u0174\x07D\x02\x02\u0174\u0175\x07" +
		"{\x02\x02\u0175\u0176\x07v\x02\x02\u0176\u0177\x07g\x02\x02\u0177\u0178" +
		"\x07e\x02\x02\u0178\u0179\x07q\x02\x02\u0179\u017A\x07f\x02\x02\u017A" +
		"\u017B\x07g\x02\x02\u017BD\x03\x02\x02\x02\u017C\u017D\x070\x02\x02\u017D" +
		"\u017E\x07u\x02\x02\u017E\u017F\x07g\x02\x02\u017F\u0180\x07s\x02\x02" +
		"\u0180\u0181\x07w\x02\x02\u0181\u0182\x07g\x02\x02\u0182\u0183\x07p\x02" +
		"\x02\u0183\u0184\x07e\x02\x02\u0184\u0185\x07g\x02\x02\u0185\u0186\x07" +
		"P\x02\x02\u0186\u0187\x07w\x02\x02\u0187\u0188\x07o\x02\x02\u0188\u0189" +
		"\x07d\x02\x02\u0189\u018A\x07g\x02\x02\u018A\u018B\x07t\x02\x02\u018B" +
		"F\x03\x02\x02\x02\u018C\u018D\x070\x02\x02\u018D\u018E\x07t\x02\x02\u018E" +
		"\u018F\x07g\x02\x02\u018F\u0190\x07x\x02\x02\u0190\u0191\x07g\x02\x02" +
		"\u0191\u0192\x07t\x02\x02\u0192\u0193\x07u\x02\x02\u0193\u0194\x07g\x02" +
		"\x02\u0194\u0195\x07*\x02\x02\u0195\u0196\x07+\x02\x02\u0196H\x03\x02" +
		"\x02\x02\u0197\u0198\x070\x02\x02\u0198\u0199\x07n\x02\x02\u0199\u019A" +
		"\x07g\x02\x02\u019A\u019B\x07p\x02\x02\u019B\u019C\x07i\x02\x02\u019C" +
		"\u019D\x07v\x02\x02\u019D\u019E\x07j\x02\x02\u019EJ\x03\x02\x02\x02\u019F" +
		"\u01A0\x070\x02\x02\u01A0\u01A1\x07u\x02\x02\u01A1\u01A2\x07r\x02\x02" +
		"\u01A2\u01A3\x07n\x02\x02\u01A3\u01A4\x07k\x02\x02\u01A4\u01A5\x07v\x02" +
		"\x02\u01A5L\x03\x02\x02\x02\u01A6\u01A7\x07#\x02\x02\u01A7N\x03\x02\x02" +
		"\x02\u01A8\u01A9\x07/\x02\x02\u01A9P\x03\x02\x02\x02\u01AA\u01AB\x07," +
		"\x02\x02\u01ABR\x03\x02\x02\x02\u01AC\u01AD\x071\x02\x02\u01ADT\x03\x02" +
		"\x02\x02\u01AE\u01AF\x07\'\x02\x02\u01AFV\x03\x02\x02\x02\u01B0\u01B1" +
		"\x07-\x02\x02\u01B1X\x03\x02\x02\x02\u01B2\u01B3\x07?\x02\x02\u01B3\u01B4" +
		"\x07?\x02\x02\u01B4Z\x03\x02\x02\x02\u01B5\u01B6\x07#\x02\x02\u01B6\u01B7" +
		"\x07?\x02\x02\u01B7\\\x03\x02\x02\x02\u01B8\u01B9\x07(\x02\x02\u01B9^" +
		"\x03\x02\x02\x02\u01BA\u01BB\x07~\x02\x02\u01BB`\x03\x02\x02\x02\u01BC" +
		"\u01BD\x07(\x02\x02\u01BD\u01BE\x07(\x02\x02\u01BEb\x03\x02\x02\x02\u01BF" +
		"\u01C0\x07~\x02\x02\u01C0\u01C1\x07~\x02\x02\u01C1d\x03\x02\x02\x02\u01C2" +
		"\u01C3\x07e\x02\x02\u01C3\u01C4\x07q\x02\x02\u01C4\u01C5\x07p\x02\x02" +
		"\u01C5\u01C6\x07u\x02\x02\u01C6\u01C7\x07v\x02\x02\u01C7\u01C8\x07c\x02" +
		"\x02\u01C8\u01C9\x07p\x02\x02\u01C9\u01CA\x07v\x02\x02\u01CAf\x03\x02" +
		"\x02\x02\u01CB\u01CC\x07k\x02\x02\u01CC\u01CD\x07p\x02\x02\u01CD\u01CE" +
		"\x07v\x02\x02\u01CEh\x03\x02\x02\x02\u01CF\u01D0\x07d\x02\x02\u01D0\u01D1" +
		"\x07q\x02\x02\u01D1\u01D2\x07q\x02\x02\u01D2\u01D3\x07n\x02\x02\u01D3" +
		"j\x03\x02\x02\x02\u01D4\u01D5\x07u\x02\x02\u01D5\u01D6\x07v\x02\x02\u01D6" +
		"\u01D7\x07t\x02\x02\u01D7\u01D8\x07k\x02\x02\u01D8\u01D9\x07p\x02\x02" +
		"\u01D9\u01DA\x07i\x02\x02\u01DAl\x03\x02\x02\x02\u01DB\u01DC\x07r\x02" +
		"\x02\u01DC\u01DD\x07w\x02\x02\u01DD\u01DE\x07d\x02\x02\u01DE\u01DF\x07" +
		"m\x02\x02\u01DF\u01E0\x07g\x02\x02\u01E0\u01E1\x07{\x02\x02\u01E1n\x03" +
		"\x02\x02\x02\u01E2\u01E3\x07u\x02\x02\u01E3\u01E4\x07k\x02\x02\u01E4\u01E5" +
		"\x07i\x02\x02\u01E5p\x03\x02\x02\x02\u01E6\u01E7\x07f\x02\x02\u01E7\u01E8" +
		"\x07c\x02\x02\u01E8\u01E9\x07v\x02\x02\u01E9\u01EA\x07c\x02\x02\u01EA" +
		"\u01EB\x07u\x02\x02\u01EB\u01EC\x07k\x02\x02\u01EC\u01ED\x07i\x02\x02" +
		"\u01EDr\x03\x02\x02\x02\u01EE\u01F0\t\x02\x02\x02\u01EF\u01EE\x03\x02" +
		"\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1" +
		"\u01F2\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F5\x070\x02" +
		"\x02\u01F4\u01F6\t\x02\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F6\u01F7" +
		"\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02" +
		"\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FB\x070\x02\x02\u01FA\u01FC\t\x02" +
		"\x02\x02\u01FB\u01FA";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02" +
		"\u01FD\u01FE\x03\x02\x02\x02\u01FEt\x03\x02\x02\x02\u01FF\u0200\x07v\x02" +
		"\x02\u0200\u0201\x07t\x02\x02\u0201\u0202\x07w\x02\x02\u0202\u0209\x07" +
		"g\x02\x02\u0203\u0204\x07h\x02\x02\u0204\u0205\x07c\x02\x02\u0205\u0206" +
		"\x07n\x02\x02\u0206\u0207\x07u\x02\x02\u0207\u0209\x07g\x02\x02\u0208" +
		"\u01FF\x03\x02\x02\x02\u0208\u0203\x03\x02\x02\x02\u0209v\x03\x02\x02" +
		"\x02\u020A\u020B\x07u\x02\x02\u020B\u020C\x07c\x02\x02\u020C\u020D\x07" +
		"v\x02\x02\u020D\u020E\x07q\x02\x02\u020E\u020F\x07u\x02\x02\u020F\u0210" +
		"\x07j\x02\x02\u0210\u0211\x07k\x02\x02\u0211\u0244\x07u\x02\x02\u0212" +
		"\u0213\x07u\x02\x02\u0213\u0214\x07c\x02\x02\u0214\u0215\x07v\x02\x02" +
		"\u0215\u0244\x07u\x02\x02\u0216\u0217\x07h\x02\x02\u0217\u0218\x07k\x02" +
		"\x02\u0218\u0219\x07p\x02\x02\u0219\u021A\x07p\x02\x02\u021A\u021B\x07" +
		"g\x02\x02\u021B\u0244\x07{\x02\x02\u021C\u021D\x07d\x02\x02\u021D\u021E" +
		"\x07k\x02\x02\u021E\u021F\x07v\x02\x02\u021F\u0244\x07u\x02\x02\u0220" +
		"\u0221\x07d\x02\x02\u0221\u0222\x07k\x02\x02\u0222\u0223\x07v\x02\x02" +
		"\u0223\u0224\x07e\x02\x02\u0224\u0225\x07q\x02\x02\u0225\u0226\x07k\x02" +
		"\x02\u0226\u0244\x07p\x02\x02\u0227\u0228\x07u\x02\x02\u0228\u0229\x07" +
		"g\x02\x02\u0229\u022A\x07e\x02\x02\u022A\u022B\x07q\x02\x02\u022B\u022C" +
		"\x07p\x02\x02\u022C\u022D\x07f\x02\x02\u022D\u0244\x07u\x02\x02\u022E" +
		"\u022F\x07o\x02\x02\u022F\u0230\x07k\x02\x02\u0230\u0231\x07p\x02\x02" +
		"\u0231\u0232\x07w\x02\x02\u0232\u0233\x07v\x02\x02\u0233\u0234\x07g\x02" +
		"\x02\u0234\u0244\x07u\x02\x02\u0235\u0236\x07j\x02\x02\u0236\u0237\x07" +
		"q\x02\x02\u0237\u0238\x07w\x02\x02\u0238\u0239\x07t\x02\x02\u0239\u0244" +
		"\x07u\x02\x02\u023A\u023B\x07f\x02\x02\u023B\u023C\x07c\x02\x02\u023C" +
		"\u023D\x07{\x02\x02\u023D\u0244\x07u\x02\x02\u023E\u023F\x07y\x02\x02" +
		"\u023F\u0240\x07g\x02\x02\u0240\u0241\x07g\x02\x02\u0241\u0242\x07m\x02" +
		"\x02\u0242\u0244\x07u\x02\x02\u0243\u020A\x03\x02\x02\x02\u0243\u0212" +
		"\x03\x02\x02\x02\u0243\u0216\x03\x02\x02\x02\u0243\u021C\x03\x02\x02\x02" +
		"\u0243\u0220\x03\x02\x02\x02\u0243\u0227\x03\x02\x02\x02\u0243\u022E\x03" +
		"\x02\x02\x02\u0243\u0235\x03\x02\x02\x02\u0243\u023A\x03\x02\x02\x02\u0243" +
		"\u023E\x03\x02\x02\x02\u0244x\x03\x02\x02\x02\u0245\u0247\t\x03\x02\x02" +
		"\u0246\u0245\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0249\x03" +
		"\x02\x02\x02\u0248\u024A\t\x02\x02\x02\u0249\u0248\x03\x02\x02\x02\u024A" +
		"\u024B\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024C\x03\x02" +
		"\x02\x02\u024C\u0253\x03\x02\x02\x02\u024D\u024F\t\x04\x02\x02\u024E\u0250" +
		"\t\x02\x02\x02\u024F\u024E\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02" +
		"\u0251\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252\u0254\x03" +
		"\x02\x02\x02\u0253\u024D\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254" +
		"z\x03\x02\x02\x02\u0255\u0256\x07d\x02\x02\u0256\u0257\x07{\x02\x02\u0257" +
		"\u0258\x07v\x02\x02\u0258\u0259\x07g\x02\x02\u0259\u025A\x07u\x02\x02" +
		"\u025A\u025C\x03\x02\x02\x02\u025B\u025D\x05}?\x02\u025C\u025B\x03\x02" +
		"\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u0263\x03\x02\x02\x02\u025E" +
		"\u025F\x07d\x02\x02\u025F\u0260\x07{\x02\x02\u0260\u0261\x07v\x02\x02" +
		"\u0261\u0263\x07g\x02\x02\u0262\u0255\x03\x02\x02\x02\u0262\u025E\x03" +
		"\x02\x02\x02\u0263|\x03\x02\x02\x02\u0264\u0268\t\x05\x02\x02\u0265\u0267" +
		"\t\x02\x02\x02\u0266\u0265\x03\x02\x02\x02\u0267\u026A\x03\x02\x02\x02" +
		"\u0268\u0266\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269~\x03\x02" +
		"\x02\x02\u026A\u0268\x03\x02\x02\x02\u026B\u0271\x07$\x02\x02\u026C\u026D" +
		"\x07^\x02\x02\u026D\u0270\x07$\x02\x02\u026E\u0270\n\x06\x02\x02\u026F" +
		"\u026C\x03\x02\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270\u0273\x03\x02" +
		"\x02\x02\u0271\u0272\x03\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0272" +
		"\u0274\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0280\x07$\x02" +
		"\x02\u0275\u027B\x07)\x02\x02\u0276\u0277\x07^\x02\x02\u0277\u027A\x07" +
		")\x02\x02\u0278\u027A\n\x07\x02\x02\u0279\u0276\x03\x02\x02\x02\u0279" +
		"\u0278\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u027C\x03\x02" +
		"\x02\x02\u027B\u0279\x03\x02\x02\x02\u027C\u027E\x03\x02\x02\x02\u027D" +
		"\u027B\x03\x02\x02\x02\u027E\u0280\x07)\x02\x02\u027F\u026B\x03\x02\x02" +
		"\x02\u027F\u0275\x03\x02\x02\x02\u0280\x80\x03\x02\x02\x02\u0281\u0282" +
		"\x07f\x02\x02\u0282\u0283\x07c\x02\x02\u0283\u0284\x07v\x02\x02\u0284" +
		"\u0285\x07g\x02\x02\u0285\u0286\x07*\x02\x02\u0286\u0287\x03\x02\x02\x02" +
		"\u0287\u0288\x05\x7F@\x02\u0288\u0289\x07+\x02\x02\u0289\x82\x03\x02\x02" +
		"\x02\u028A\u028B\x072\x02\x02\u028B\u028F\t\b\x02\x02\u028C\u028E\t\t" +
		"\x02\x02\u028D\u028C\x03\x02\x02\x02\u028E\u0291\x03\x02\x02\x02\u028F" +
		"\u028D\x03\x02\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290\x84\x03\x02\x02" +
		"\x02\u0291\u028F\x03\x02\x02\x02\u0292\u0293\x07v\x02\x02\u0293\u0294" +
		"\x07z\x02\x02\u0294\u0295\x070\x02\x02\u0295\u0296\x07c\x02\x02\u0296" +
		"\u0297\x07i\x02\x02\u0297\u02A0\x07g\x02\x02\u0298\u0299\x07v\x02\x02" +
		"\u0299\u029A\x07z\x02\x02\u029A\u029B\x070\x02\x02\u029B\u029C\x07v\x02" +
		"\x02\u029C\u029D\x07k\x02\x02\u029D\u029E\x07o\x02\x02\u029E\u02A0\x07" +
		"g\x02\x02\u029F\u0292\x03\x02\x02\x02\u029F\u0298\x03\x02\x02\x02\u02A0" +
		"\x86\x03\x02\x02\x02\u02A1\u02A2\x07v\x02\x02\u02A2\u02A3\x07j\x02\x02" +
		"\u02A3\u02A4\x07k\x02\x02\u02A4\u02A5\x07u\x02\x02\u02A5\u02A6\x070\x02" +
		"\x02\u02A6\u02A7\x07c\x02\x02\u02A7\u02A8\x07e\x02\x02\u02A8\u02A9\x07" +
		"v\x02\x02\u02A9\u02AA\x07k\x02\x02\u02AA\u02AB\x07x\x02\x02\u02AB\u02AC" +
		"\x07g\x02\x02\u02AC\u02AD\x07K\x02\x02\u02AD\u02AE\x07p\x02\x02\u02AE" +
		"\u02AF\x07r\x02\x02\u02AF\u02B0\x07w\x02\x02\u02B0\u02B1\x07v\x02\x02" +
		"\u02B1\u02B2\x07K\x02\x02\u02B2\u02B3\x07p\x02\x02\u02B3\u02B4\x07f\x02" +
		"\x02\u02B4\u02B5\x07g\x02\x02\u02B5\u0300\x07z\x02\x02\u02B6\u02B7\x07" +
		"v\x02\x02\u02B7\u02B8\x07j\x02\x02\u02B8\u02B9\x07k\x02\x02\u02B9\u02BA" +
		"\x07u\x02\x02\u02BA\u02BB\x070\x02\x02\u02BB\u02BC\x07c\x02\x02\u02BC" +
		"\u02BD\x07e\x02\x02\u02BD\u02BE\x07v\x02\x02\u02BE\u02BF\x07k\x02\x02" +
		"\u02BF\u02C0\x07x\x02\x02\u02C0\u02C1\x07g\x02\x02\u02C1\u02C2\x07D\x02" +
		"\x02\u02C2\u02C3\x07{\x02\x02\u02C3\u02C4\x07v\x02\x02\u02C4\u02C5\x07" +
		"g\x02\x02\u02C5\u02C6\x07e\x02\x02\u02C6\u02C7\x07q\x02\x02\u02C7\u02C8" +
		"\x07f\x02\x02\u02C8\u0300\x07g\x02\x02\u02C9\u02CA\x07v\x02\x02\u02CA" +
		"\u02CB\x07z\x02\x02\u02CB\u02CC\x070\x02\x02\u02CC\u02CD\x07k\x02\x02" +
		"\u02CD\u02CE\x07p\x02\x02\u02CE\u02CF\x07r\x02\x02\u02CF\u02D0\x07w\x02" +
		"\x02\u02D0\u02D1\x07v\x02\x02\u02D1\u02D2\x07u\x02\x02\u02D2\u02D3\x07" +
		"0\x02\x02\u02D3\u02D4\x07n\x02\x02\u02D4\u02D5\x07g\x02\x02\u02D5\u02D6" +
		"\x07p\x02\x02\u02D6\u02D7\x07i\x02\x02\u02D7\u02D8\x07v\x02\x02\u02D8" +
		"\u0300\x07j\x02\x02\u02D9\u02DA\x07v\x02\x02\u02DA\u02DB\x07z\x02\x02" +
		"\u02DB\u02DC\x070\x02\x02\u02DC\u02DD\x07q\x02\x02\u02DD\u02DE\x07w\x02" +
		"\x02\u02DE\u02DF\x07v\x02\x02\u02DF\u02E0\x07r\x02\x02\u02E0\u02E1\x07" +
		"w\x02\x02\u02E1\u02E2\x07v\x02\x02\u02E2\u02E3\x07u\x02\x02\u02E3\u02E4" +
		"\x070\x02\x02\u02E4\u02E5\x07n\x02\x02\u02E5\u02E6\x07g\x02\x02\u02E6" +
		"\u02E7\x07p\x02\x02\u02E7\u02E8\x07i\x02\x02\u02E8\u02E9\x07v\x02\x02" +
		"\u02E9\u0300\x07j\x02\x02\u02EA\u02EB\x07v\x02\x02\u02EB\u02EC\x07z\x02" +
		"\x02\u02EC\u02ED\x070\x02\x02\u02ED\u02EE\x07x\x02\x02\u02EE\u02EF\x07" +
		"g\x02\x02\u02EF\u02F0\x07t\x02\x02\u02F0\u02F1\x07u\x02\x02\u02F1\u02F2" +
		"\x07k\x02\x02\u02F2\u02F3\x07q\x02\x02\u02F3\u0300\x07p\x02\x02\u02F4" +
		"\u02F5\x07v\x02\x02\u02F5\u02F6\x07z\x02\x02\u02F6\u02F7\x070\x02\x02" +
		"\u02F7\u02F8\x07n\x02\x02\u02F8\u02F9\x07q\x02\x02\u02F9\u02FA\x07e\x02" +
		"\x02\u02FA\u02FB\x07m\x02\x02\u02FB\u02FC\x07v\x02\x02\u02FC\u02FD\x07" +
		"k\x02\x02\u02FD\u02FE\x07o\x02\x02\u02FE\u0300\x07g\x02\x02\u02FF\u02A1" +
		"\x03\x02\x02\x02\u02FF\u02B6\x03\x02\x02\x02\u02FF\u02C9\x03\x02\x02\x02" +
		"\u02FF\u02D9\x03\x02\x02\x02\u02FF\u02EA\x03\x02\x02\x02\u02FF\u02F4\x03" +
		"\x02\x02\x02\u0300\x88\x03\x02\x02\x02\u0301\u0305\t\n\x02\x02\u0302\u0304" +
		"\t\v\x02\x02\u0303\u0302\x03\x02\x02\x02\u0304\u0307\x03\x02\x02\x02\u0305" +
		"\u0303\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02\u0306\x8A\x03\x02\x02" +
		"\x02\u0307\u0305\x03\x02\x02\x02\u0308\u030A\t\f\x02\x02\u0309\u0308\x03" +
		"\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030B" +
		"\u030C\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u030E\bF\x02" +
		"\x02\u030E\x8C\x03\x02\x02\x02\u030F\u0310\x071\x02\x02\u0310\u0311\x07" +
		",\x02\x02\u0311\u0315\x03\x02\x02\x02\u0312\u0314\v\x02\x02\x02\u0313" +
		"\u0312\x03\x02\x02\x02\u0314\u0317\x03\x02\x02\x02\u0315\u0316\x03\x02" +
		"\x02\x02\u0315\u0313\x03\x02\x02\x02\u0316\u0318\x03\x02\x02\x02\u0317" +
		"\u0315\x03\x02\x02\x02\u0318\u0319\x07,\x02\x02\u0319\u031A\x071\x02\x02" +
		"\u031A\u031B\x03\x02\x02\x02\u031B\u031C\bG\x03\x02\u031C\x8E\x03\x02" +
		"\x02\x02\u031D\u031E\x071\x02\x02\u031E\u031F\x071\x02\x02\u031F\u0323" +
		"\x03\x02\x02\x02\u0320\u0322\n\r\x02\x02\u0321\u0320\x03\x02\x02\x02\u0322" +
		"\u0325\x03\x02\x02\x02\u0323\u0321\x03\x02\x02\x02\u0323\u0324\x03\x02" +
		"\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325\u0323\x03\x02\x02\x02\u0326" +
		"\u0327\bH\x03\x02\u0327\x90\x03\x02\x02\x02\x1B\x02\u01F1\u01F7\u01FD" +
		"\u0208\u0243\u0246\u024B\u0251\u0253\u025C\u0262\u0268\u026F\u0271\u0279" +
		"\u027B\u027F\u028F\u029F\u02FF\u0305\u030B\u0315\u0323\x04\b\x02\x02\x02" +
		"\x03\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			CashScriptLexer._serializedATNSegment0,
			CashScriptLexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CashScriptLexer.__ATN) {
			CashScriptLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CashScriptLexer._serializedATN));
		}

		return CashScriptLexer.__ATN;
	}

}

